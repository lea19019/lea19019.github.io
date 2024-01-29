<script lang="ts" setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify'

const theme = useTheme()
const icon = ref('mdi-weather-sunny')

function toggleTheme () {
  const isDark = theme.global.current.value.dark 
  theme.global.name.value = isDark ? 'light' : 'dark'
  if (isDark) icon.value = 'mdi-weather-night'
  else icon.value = 'mdi-weather-sunny'
}
</script>

<template>
  <VAppBar flat>
    <VAppBarTitle text="Song Sense"/>
    <VBtn @click="toggleTheme" :icon="icon" />
  </VAppBar>
</template>

<style lang="scss" scoped>
.v-toolbar__content > .v-btn:last-child {
  margin-right: auto;
}
.v-app-bar {
  border-width: 1px;
}
</style>