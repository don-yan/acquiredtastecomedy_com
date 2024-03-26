<script lang="ts" setup>
interface Props {
  document: object;
}
const props = defineProps<Props>();

const htmlString = useDocumentToHtmlString(props.document);
</script>
<template>
  <div v-html="htmlString"></div>
</template>
