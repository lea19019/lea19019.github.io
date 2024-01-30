<script lang="ts" setup>
import Song from '@/components/Song.vue';
import TitleHeader from '@/components/TitleHeader.vue';
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height justify-center">
      <TitleHeader />
      <Song/>
    </v-responsive>
  </v-container>
</template>
