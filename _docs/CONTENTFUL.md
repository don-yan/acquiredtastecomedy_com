# Contentful Docs

## Import / Export


- [contentful-cli/docs/space/export](https://github.com/contentful/contentful-cli/tree/master/docs/space/export)


```shell
contentful space export --space-id=$(echo $CTF_SPACE_ID) --management-token=$(echo $CTF_CMA_TOKEN) --skip-content --skip-roles --skip-webhooks --save-file --content-file=_contentful/export/content-types.json --environment-id=master
```
