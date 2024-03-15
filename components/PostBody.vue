<script lang="ts" setup>
// import * from '~/composables/contentful'
/**
 * Define props
 */
interface Props {
  slug: string;
}
const props = defineProps<Props>();
// ----------------------------------------------------------------------------

const searchParams = useSlugQuery(props.slug);
// const { title, body, heroImage } = await usePost(props.slug);
const { title, body, heroImage } = await usePost({ searchParams, key: props.slug });
</script>

<template>
  <article>
    <header>
      <h1>
        {{ title }}
      </h1>
    </header>
    <div>
      <!-- {{ body }} -->
      <DocumentToHtmlString :document="body" />
    </div>
  </article>
</template>