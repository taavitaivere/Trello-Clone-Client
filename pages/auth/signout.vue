<template>
  <h1>Sign out</h1>
</template>

<script>
export default {
  async asyncData() {
    $nuxt.$fire.$auth.signOut()
  }
}
</script>
<style>
</style>
