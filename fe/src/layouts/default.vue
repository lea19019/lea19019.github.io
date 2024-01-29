<script lang="ts" setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
  import NavigationDrawer from './default/NavigationDrawer.vue';
</script>

<template>
  <VApp>
    <DefaultBar />
    <NavigationDrawer />
    <DefaultView />
  </VApp>
</template>