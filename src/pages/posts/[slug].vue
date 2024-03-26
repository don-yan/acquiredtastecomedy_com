<script lang="ts">
definePageMeta({
  layout: "default",
});

export default {

}

</script>

<template>
  <h2>slug</h2>
  <PostBody :slug="$route.params.slug" />
</template>
