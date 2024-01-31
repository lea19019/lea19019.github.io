<script lang="ts" setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify'
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js'

const theme = useTheme()
const icon = ref(mdiWeatherSunny)

function toggleTheme () {
  const isDark = theme.global.current.value.dark 
  theme.global.name.value = isDark ? 'light' : 'dark'
  if (isDark) icon.value = mdiWeatherNight
  else icon.value = mdiWeatherSunny
}
</script>

<template>
  <VAppBar flat>
    <VAppBarTitle text="Song Sense"/>
    <VBtn @click="toggleTheme" :icon="icon" />
    <VBtn icon >
      <span>&#9776;</span>
      <VMenu activator="parent">
        <VBtn text="Dulce Soledad" :to="{ path: '/dulce-soledad' }" />
        <VBtn text="Lattice" :to="{ path: '/lattice' }" />
        <VBtn text="Mania Cardiaca" :to="{ path: '/mania-cardiaca' }" />
        <VBtn text="Respiro (Cap. 8)" :to="{ path: '/respiro' }" />
        <VBtn text="Rue Vieille Du Temple" :to="{ path: '/rue-vieille-du-temple' }" />
        <VBtn text="Ser Parte" :to="{ path: '/ser-parte' }" />
      </VMenu>
    </VBtn>
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