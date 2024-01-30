<script lang="ts" setup>
  import DefaultBar from '@/components/AppBar.vue'
  import NavigationDrawer from '@/components/NavigationDrawer.vue';
</script>

<template>
  <VApp>
    <DefaultBar />
    <NavigationDrawer />
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>