<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: ['h-full'],
  },
})
</script>
