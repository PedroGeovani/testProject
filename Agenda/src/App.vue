<script lang="ts">

import PageHeader from './views/PageHeader.vue';
export default {
  name: 'App',
  components : {
    PageHeader,
  }
}
</script>

<template>
  <div class="home_page">    
    <PageHeader/>    
  </div>
</template>

<style scoped>
.home_page{
  background: rgb(204, 204, 255);
}
</style>
