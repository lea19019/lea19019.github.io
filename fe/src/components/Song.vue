<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  song: {
    link: string
    name: string
    artist: string
    letter: string
    image: string
    description: string
  }
}>();
const imgURL = computed(() => "/src/assets/" + props.song.image);
</script>

<template>
  <VCard
  class="mx-lg-16"
    >
    <VCardTitle>
      {{ song.name }}
    </VCardTitle>
    <VCardSubtitle>
        by {{  song.artist }}
    </VCardSubtitle>
    <VCardText class="text-wrap">
        <pre class="font-italic text-body-2 pb-4"> {{ song.letter }} </pre>
        <p class="text-left text-body-2 px-lg-16 break-word"> {{ song.description }}</p>
    </VCardText>
    <VImg class="ma-3" :src="imgURL" />
  </VCard>
</template>

<style scoped>
.break-word {
  
  white-space: pre-line
}
</style>