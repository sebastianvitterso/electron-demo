<template>
  <button
    class="rounded-full bg-slate-300 hover:bg-slate-200 active:bg-slate-100 text-slate-800 flex items-center justify-center"
    :style="`height: ${size}px; width: ${size}px;`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  size?: number
}
withDefaults(defineProps<Props>(), { size: 64 })
</script>

<style></style>
