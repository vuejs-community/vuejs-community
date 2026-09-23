<template>
  <span
    ref="el"
    class=""
    :class="cn([
      'relative inline-block -rotate-4 origin-top-left',
      'mx-[0.04em] px-[0.12em] rounded-[2px]',
      'bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent',
      'outline-2 outline-offset-2 outline-green-500',
      'cursor-nwse-resize select-none touch-none',
      'scale-x-[var(--drag-scale-x,1)] scale-y-[var(--drag-scale-y,1)]',
      'before:absolute before:-top-[7px] before:-left-[7px] before:size-2 before:rounded-[2px] before:border-2 before:border-green-500 before:bg-white before:content-[\'\']',
      'after:absolute after:-bottom-[7px] after:-right-[7px] after:size-2 after:rounded-[2px] after:border-2 after:border-green-500 after:bg-white after:content-[\'\']',
    ])"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onRelease"
    @pointercancel="onRelease"
    @lostpointercapture="onRelease"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils.ts'

defineOptions({
  name: 'HeroSelectionBox',
})

const SPRING_EASING = 'linear(0, 0.0091 1%, 0.0323 2%, 0.1256 4.3%, 0.6484 12.9%, 0.8559 17%, 0.9315 19%, 0.9943 21.1%, 1.0421 23.4%, 1.0724 25.7%, 1.0838 27.1%, 1.0907 28.7%, 1.0928 30.4%, 1.0901 32.3%, 1.0774 35.4%, 1.0339 43%, 1.0154 46.9%, 1.0011 51.3%, 0.9935 55.9%, 0.9915 61.7%, 0.9999 81.7%, 1)'
const MIN_SCALE = 0.6
const MAX_SCALE = 2.4

const el = useTemplateRef<HTMLElement>('el')
const preferredMotion = usePreferredReducedMotion()

const scaleX = useCssVar('--drag-scale-x', el, { initialValue: '1' })
const scaleY = useCssVar('--drag-scale-y', el, { initialValue: '1' })
let drag: { x: number, y: number, w: number, h: number } | null = null

function clamp(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value))
}

function onPointerDown(event: PointerEvent) {
  if (!el.value)
    return
  const rect = el.value.getBoundingClientRect()
  drag = { x: event.clientX, y: event.clientY, w: rect.width, h: rect.height }
  el.value.getAnimations().forEach(animation => animation.cancel())
  el.value.setPointerCapture(event.pointerId)
}

function onPointerMove(event: PointerEvent) {
  if (!drag)
    return
  scaleX.value = String(clamp(1 + (event.clientX - drag.x) / drag.w))
  scaleY.value = String(clamp(1 + (event.clientY - drag.y) / drag.h))
}

function onRelease() {
  if (!drag || !el.value)
    return
  drag = null
  const current = `${scaleX.value} ${scaleY.value}`
  scaleX.value = '1'
  scaleY.value = '1'
  if (preferredMotion.value === 'reduce')
    return
  el.value.animate([{ scale: current }, { scale: '1 1' }], {
    duration: 700,
    easing: SPRING_EASING,
  })
}
</script>
