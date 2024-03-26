<script lang="ts">
definePageMeta({
  layout: "default",
});

export default {};
</script>
<template>
  <PostsOverview :tag="$route.params.slug" />
</template>
