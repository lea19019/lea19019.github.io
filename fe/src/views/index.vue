<script lang="ts" setup>
import Song from '@/components/Song.vue';
import TitleHeader from '@/components/TitleHeader.vue';
import { songs } from '@/api';
import { ref, defineProps, watch } from 'vue';

const props = defineProps<{ songName: string }>();
const song = ref(songs.find((s) => s.link === props.songName));

watch(() => props.songName, () => {
  song.value = songs.find((s) => s.link === props.songName);
});
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height justify-center">
      <TitleHeader />
      <Song :song="song" />
    </v-responsive>
  </v-container>
</template>
