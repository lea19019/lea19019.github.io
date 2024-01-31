<script lang="ts" setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify'
import { mdiWeatherSunny, mdiWeatherNight, mdiMenu } from '@mdi/js'

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
    <VBtn icon>
      <VIcon size="20" :icon="mdiMenu" color="parent"/>
      <VMenu activator="parent">
        <VList>
          <VListItem text="Dulce Soledad" :to="{ path: '/dulce-soledad' }" />
          <VListItem text="Lattice" :to="{ path: '/lattice' }" />
          <VListItem text="Mania Cardiaca" :to="{ path: '/mania-cardiaca' }" />
          <VListItem text="Respiro (Cap. 8)" :to="{ path: '/respiro' }" />
          <VListItem text="Rue Vieille Du Temple" :to="{ path: '/rue-vieille-du-temple' }" />
          <VListItem text="Ser Parte" :to="{ path: '/ser-parte' }" />
        </VList>
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