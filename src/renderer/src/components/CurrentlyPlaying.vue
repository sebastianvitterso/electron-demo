<template>
  <div v-if="currentTrack" class="flex gap-4 items-center">
    <div class="flex flex-col text-slate-300 text-ellipsis items-end text-right">
      <p class="font-semibold">{{ currentTrack.name }}</p>
      <p class="font-light">{{ currentTrack.artist }}</p>
    </div>
    <img :src="currentTrack.artwork_url" alt="Album art" class="w-20 h-20 rounded-md" />
  </div>
  <div v-else></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { TrackInfo } from 'spotify-node-applescript'

const currentTrack = ref<TrackInfo | undefined>(undefined)

const currentTrackCheckInterval = ref<number | undefined>(undefined)
onMounted(() => {
  currentTrackCheckInterval.value = window.setInterval(async () => {
    currentTrack.value = await window.api.getTrack()
  }, 200)
})

onBeforeUnmount(() => window.clearInterval(currentTrackCheckInterval.value))
</script>

<style></style>
