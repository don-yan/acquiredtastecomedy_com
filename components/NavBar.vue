<script lang="ts" setup>
const NavPages = await usePagesNav();

const NavItems = [{ slug: "", title: "Home" },...NavPages, { slug: "posts", title: "Posts" }];

</script>

<template>
  <nav>
    <span>
      <a href="/" title="Home">Home</a>
      &nbsp;
    </span>
    <span v-for="item in NavItems" :key="item.slug">
      <a :href="`/${item.slug}`" :title="item.title">{{ item.title }} </a>
      &nbsp;
    </span>
  </nav>
</template>
