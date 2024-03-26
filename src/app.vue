<script lang="ts">

import 'primevue/resources/themes/aura-light-noir/theme.css'

</script>
<template>


  <NuxtLayout/>
  <div class="container">
    <div class="card">

      <form @submit.prevent="greet">
        <InputText type="text" v-model="text" placeholder="Name"/>
        <Button type="submit" label="Submit" outlined/>
      </form>
    </div>
  </div>

</template>

<style scoped>
body {
  background-color: red;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--surface-ground);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-card);
  padding: 3rem;
  border-radius: 1rem;
}

form {
  display: flex;
  gap: 1rem;
}
</style>
