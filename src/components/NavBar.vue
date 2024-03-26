<script lang="ts" setup>
const NavPages = await usePagesNav();

const NavItems = [{slug: "", title: "Home"}, ...NavPages, {slug: "posts", title: "Posts"}];

</script>

<template>
  <header class="shadow-small bg-white">
    <nav class="container mx-auto p-4 flex justify-between">

      <a href="/" title="Home" class="font-bold">Home</a>
      &nbsp;
      <ul class="flex gap-4">
        <li v-for="item in NavItems" :key="item.slug">
          <a :href="`/${item.slug}`"
             :title="item.title"
             class="btn"
          >{{ item.title }}
          </a>

          <!--
                        <NuxtLink :to="`/${item.slug}`"
                       :title="item.title"
                       class="btn"
                    >{{ item.title }}</NuxtLink>
                    -->
          &nbsp;
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
