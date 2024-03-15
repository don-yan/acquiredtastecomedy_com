import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const usePage = async (slug: string): Promise<Page> => {
  const { data } = await useAsyncData("page", async (nuxtApp) => {
    const { $contentfulClient } = nuxtApp;
    return $contentfulClient.getEntries({
      content_type: "page",
      "fields.slug[in]": slug,
      limit: 1,
    });
  });
  const { title, body, heroImage } = data.value.items[0].fields;

  return {
    title,
    body,
    heroImage,
  };
};

export const usePagesNav = async (): Promise<PageNav[]> => {
  const { data } = await useAsyncData("pageNav", async (nuxtApp) => {
    const { $contentfulClient } = nuxtApp;
    return $contentfulClient.getEntries({
      content_type: "page",
      "fields.slug[nin]": "home,404", // filter out home slug
    });
  });
  const pagesNav = data.value.items.map((pageFields: any) => {
    const { title, slug } = pageFields.fields;
    return { title, slug };
  });
  return pagesNav;
};

export const useTags = async (): Promise<TagNav[]> => {
    const { data } = await useAsyncData('tagNav', async (nuxtApp) => {
        const { $contentfulClient } = nuxtApp
        return $contentfulClient.getEntries({
            content_type: 'taxonomy_tag'
        })
    })
    const tagsNav = data?.value?.items
        .map((tagFields: any) => {
            const { title, slug } = tagFields.fields
            return { title, slug }
        })
    return tagsNav
}

export const usePosts = async (options: {
    key: string;
    searchParams?: object;
}): Promise<Post[]> => {
    let query: object;
    if (options?.searchParams) query = options.searchParams;
    const { data } = await useAsyncData(`posts-${options?.key}`, async (nuxtApp) => {
        const { $contentfulClient } = nuxtApp
        return $contentfulClient.getEntries({
            content_type: 'post',
            ...query,
        })
    })

    if (process.server) {
        console.log("is server!");
        // const stringifySafe = require("json-stringify-safe");    
        // const logger = require("pino")();
        // logger.info(stringifySafe(data));
      } else {
        console.log("is client!");
      }
    return data.value.items.map((item: any) => {
        const { title, slug } = item.fields;
        return { title, slug }
    })
}

export const usePost = async (options: {
    key: string;
    searchParams: object;
}): Promise<Post> => {
    const query = options.searchParams;
    const { data } = await useAsyncData(`post-${options?.key}`, async (nuxtApp) => {
        const { $contentfulClient } = nuxtApp
        return $contentfulClient.getEntries({
            content_type: 'post',
            ...query,
        })
    })
    const { title, body, heroImage } = data?.value?.items[0]?.fields;
    return {
        title,
        body,
        heroImage
    }
}

export const useSlugQuery = (slug: string): object => ({ 'fields.slug': slug, limit: 1});

export const useTagSearch = async (slug: string): Promise<ContentfulSearch> => {
    const query = useSlugQuery(slug);
    const { data } = await useAsyncData(`tagSearch-${slug}`, async (nuxtApp) => {
        const { $contentfulClient } = nuxtApp
        return $contentfulClient.getEntries({
            content_type: 'taxonomy_tag',
            ...query
        })
    })
    if (data?.value?.items?.length === 1) {
        return { links_to_entry: data?.value.items[0].sys.id };
    }
    return { links_to_entry: '__NO__ID__FOUND__' }
}


export const useDocumentToHtmlString = (document: any): string => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node: any) => `<div>EMBEDDED_ENTRY_NOT_CONFIGURED: ${(JSON.stringify(node))}</div>`,
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const {
                    title,
                    file: {
                        url
                    },
                } = node?.data?.target?.fields;
                return `<img src="https:${url}" alt="${title}" role="presentation" />`
            }
        }
    }
    return documentToHtmlString({ ...document }, options);
}
