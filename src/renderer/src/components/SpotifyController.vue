<template>
  <div class="flex gap-2 items-center">
    <CircularButton @click="next">
      <PhSkipBack weight="fill" />
    </CircularButton>
    <CircularButton :size="80" @click="playPause">
      <PhPause v-if="isPlaying" weight="fill" />
      <PhPlay v-else weight="fill" />
    </CircularButton>
    <CircularButton @click="previous">
      <PhSkipForward weight="fill" />
    </CircularButton>
  </div>
</template>

<script setup lang="ts">
import { PhPause, PhPlay, PhSkipBack, PhSkipForward } from '@phosphor-icons/vue'
import CircularButton from './CircularButton.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isPlaying = ref(false)

const playPause = () => window.api.playPause()
const next = () => window.api.next()
const previous = () => window.api.previous()

const isPlayingCheckInterval = ref<number | undefined>(undefined)
onMounted(() => {
  isPlayingCheckInterval.value = window.setInterval(async () => {
    isPlaying.value = await window.api.isPlaying()
  }, 200)
})

onBeforeUnmount(() => window.clearInterval(isPlayingCheckInterval.value))
</script>

<style></style>
