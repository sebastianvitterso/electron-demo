<template>
  <div class="w-screen h-screen flex items-center justify-between p-4 gap-4">
    <SpotifyController />
    <CurrentlyPlaying />
  </div>
</template>

<script setup lang="ts">
import CurrentlyPlaying from './components/CurrentlyPlaying.vue'
import SpotifyController from './components/SpotifyController.vue'
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  -webkit-app-region: drag;
  user-select: none;
  @apply bg-slate-900;
}

button {
  -webkit-app-region: no-drag;
}
</style>
