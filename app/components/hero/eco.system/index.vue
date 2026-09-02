<template>
  <Motion
    :variants="containerVariants"
    :viewport="{
      once: true,
      margin: '-100px',
    }"
    as="section"
    class="relative bg-white text-neutral-900"
    initial="hidden"
    while-in-view="visible"
  >
    <div class="container py-16 md:py-24 lg:py-32">
      <div class="w-full">
        <Motion
          as="span"
          :variants="itemVariants"
          class="font-mono text-[10px] uppercase tracking-[0.17em] text-muted-foreground"
        >
          Everything you need to build with Vue, gathered in one place.
        </Motion>

        <Motion
          as="h2"
          :variants="itemVariants"
          class="mt-3 text-4xl tracking-normal text-balance md:text-6xl lg:text-[5.5rem]"
        >
          Explore the ecosystem
        </Motion>
      </div>

      <div class="mt-10 grid gap-12 md:mt-14 md:grid-cols-[1fr_1.1fr] md:gap-16 lg:mt-20 lg:gap-24">
        <Motion :variants="containerVariants" as="div" class="flex min-w-0 flex-col">
          <Motion
            v-for="(step, index) in steps"
            :key="step.id"
            :ref="target => setStepRef(step.id, target)"
            :class="activeId === step.id ? 'text-neutral-950' : 'text-neutral-400'"
            :style="{ order: index * 2 }"
            :variants="itemVariants"
            as="div"
            class="relative border-t border-neutral-200 py-10 transition-colors first:border-t-0 md:py-16"
          >
            <span
              :class="cn([
                'absolute left-0 top-10',
                'h-10 w-px',
                'bg-neutral-950',
                'transition-opacity duration-300 md:top-16 md:h-16',
                {
                  'opacity-100': activeId === step.id,
                  'opacity-0': activeId !== step.id,
                },
              ])"
            />

            <div class="flex items-baseline gap-4 pl-5">
              <span class="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                {{ step.step }} · {{ step.label }}
              </span>
            </div>

            <p
              :class="activeId === step.id ? 'text-neutral-950' : 'text-neutral-400'"
              class="mt-4 pl-5 text-3xl leading-tight tracking-[-0.035em] transition-colors md:text-4xl lg:text-5xl"
            >
              {{ step.title }}
            </p>

            <p class="mt-4 max-w-md pl-5 text-base leading-relaxed text-neutral-500 md:text-lg">
              {{ step.body }}
            </p>
          </Motion>

          <Motion
            :style="{
              order: activeIndex * 2 + 1,
            }"
            :transition="{
              layout: {
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1],
              },
            }"
            as="div"
            class="md:hidden"
            layout
          >
            <div
              :class="cn([
                'relative overflow-hidden min-h-[420px]',
                'flex items-center justify-center',
                'border border-neutral-300',
                'bg-gradient-to-br from-white via-neutral-50 to-neutral-100',
                'p-6 backdrop-blur-xl',
              ])"
            >
              <div
                :class="cn([
                  'pointer-events-none',
                  'absolute inset-0',
                  'bg-[radial-gradient(ellipse_at_30%_10%,rgba(0,0,0,0.08),transparent_60%)]',
                ])"
              />
              <div
                :class="cn([
                  'pointer-events-none',
                  'absolute inset-0 opacity-[0.05] mix-blend-overlay',
                  'bg-[repeating-conic-gradient(from_0deg_at_50%_50%,transparent_0deg_0.5deg,currentColor_0.5deg_1deg)]',
                  '[background-size:3px_3px]',
                ])"
              />

              <div class="relative flex w-full self-stretch items-center justify-center">
                <AnimatePresence mode="wait">
                  <Motion
                    :key="activeId"
                    :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
                    :exit="{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }"
                    :initial="{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }"
                    :transition="{ duration: 0.55, ease: EASE }"
                    as="div"
                    class="flex w-full self-stretch items-center justify-center"
                  >
                    <component :is="activePreview" />
                  </Motion>
                </AnimatePresence>
              </div>
            </div>
          </Motion>
        </Motion>

        <Motion
          :variants="itemVariants"
          as="div"
          class="hidden min-w-0 overflow-clip md:block"
        >
          <div class="sticky top-24">
            <div
              class=""
              :class="cn([
                'relative h-[620px]',
                'flex items-center justify-center overflow-hidden',
                'border border-neutral-300 rounded-sm',
                'bg-gradient-to-br from-white via-neutral-50 to-neutral-100',
                'p-6 backdrop-blur-xl md:p-10',
              ])"
            >
              <!--              <div -->
              <!--                :class="cn([ -->
              <!--                  'pointer-events-none', -->
              <!--                  'absolute inset-0', -->
              <!--                  'bg-[radial-gradient(ellipse_at_30%_10%,rgba(0,0,0,0.08),transparent_60%)]', -->
              <!--                ])" -->
              <!--              /> -->
              <!--              <div -->
              <!--                :class="cn([ -->
              <!--                  'pointer-events-none', -->
              <!--                  'absolute inset-0 opacity-[0.05] mix-blend-overlay', -->
              <!--                  'bg-[repeating-conic-gradient(from_0deg_at_50%_50%,transparent_0deg_0.5deg,currentColor_0.5deg_1deg)]', -->
              <!--                  '[background-size:3px_3px]', -->
              <!--                ])" -->
              <!--              /> -->

              <DotPattern />
              <div class="relative flex w-full self-stretch items-center justify-center">
                <AnimatePresence mode="wait">
                  <Motion
                    :key="activeId"
                    :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
                    :exit="{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }"
                    :initial="{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }"
                    :transition="{ duration: 0.55, ease: EASE }"
                    as="div"
                    class="flex w-full self-stretch items-center justify-center"
                  >
                    <component :is="activePreview" />
                  </Motion>
                </AnimatePresence>
              </div>
            </div>

            <div
              :class="cn([
                'flex items-baseline justify-end mt-4',
                'font-mono text-[10px] text-neutral-500',
                'uppercase tracking-[0.14em]',
              ])"
            >
              <span>Step {{ activeIndex + 1 }} / {{ steps.length }}</span>
            </div>
          </div>
        </Motion>
      </div>
      <!-- -->
    </div>
  </Motion>
</template>

<script lang="ts" setup>
import { AnimatePresence, Motion } from 'motion-v'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { cn } from '~/lib/utils.ts'
import HooksPreviews from './previews/hooks.vue'
import ModulesPreview from './previews/module.vue'
import PluginsPreview from './previews/plugins.vue'
import UiPreviews from './previews/ui.vue'

defineOptions({
  name: 'HeroEcoSystem',
})

type StepId = 'ui' | 'hooks' | 'modules' | 'plugins'

const EASE = [0.16, 1, 0.3, 1] as const
interface Step {
  id: StepId
  step: string
  label: string
  title: string
  body: string
}
const steps: Step[] = [
  {
    id: 'ui',
    step: '01',
    label: 'ui library',
    title: 'Vue UI',
    body: 'Components for every interface.',
  },
  {
    id: 'hooks',
    step: '02',
    label: 'hooks',
    title: 'Composables',
    body: 'Reusable logic for Vue applications.',
  },
  {
    id: 'modules',
    step: '03',
    label: 'modules',
    title: 'Nuxt Modules',
    body: 'Extend Nuxt without reinventing the wheel.',
  },
  {
    id: 'plugins',
    step: '04',
    label: 'plugins',
    title: 'Vite Plugins',
    body: 'Build faster with the Vite ecosystem.',
  },
]

const activeId = ref<StepId>('ui')
const stepRefs = new Map<StepId, HTMLElement>()

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

function resolveHTMLElement(target: unknown): HTMLElement | null {
  if (target instanceof HTMLElement)
    return target

  if (target && typeof target === 'object' && '$el' in target) {
    const element = (target as { $el?: unknown }).$el
    return element instanceof HTMLElement ? element : null
  }

  return null
}

function setStepRef(id: StepId, target: unknown) {
  const element = resolveHTMLElement(target)

  if (element)
    stepRefs.set(id, element)
  else
    stepRefs.delete(id)
}

const activeIndex = computed(() => {
  const index = steps.findIndex(step => step.id === activeId.value)
  return Math.max(index, 0)
})

const activeStep = computed(() => steps[activeIndex.value]!)

const previewComponents = {
  ui: UiPreviews,
  hooks: HooksPreviews,
  modules: ModulesPreview,
  plugins: PluginsPreview,
} as const

const activePreview = computed(() => previewComponents[activeId.value])

/**
 * Source-faithful Night Shift activation logic:
 * - trigger line = 42% of viewport height
 * - inspect every step's getBoundingClientRect().top
 * - among steps that crossed the line, pick the nearest one above it
 * - scroll/resize reads are throttled by requestAnimationFrame
 */
function updateActiveStep() {
  const threshold = window.innerHeight * 0.42
  let candidate: StepId | null = null
  let candidateTop = Number.NEGATIVE_INFINITY

  for (const step of steps) {
    const element = stepRefs.get(step.id)
    if (!element)
      continue

    const top = element.getBoundingClientRect().top

    if (top <= threshold && top > candidateTop) {
      candidateTop = top
      candidate = step.id
    }
  }

  if (candidate && candidate !== activeId.value)
    activeId.value = candidate
}

let frameId: number | null = null

function scheduleUpdate() {
  if (typeof window === 'undefined')
    return

  if (frameId !== null)
    cancelAnimationFrame(frameId)

  frameId = requestAnimationFrame(() => {
    frameId = null
    updateActiveStep()
  })
}

const browserWindow = typeof window === 'undefined' ? undefined : window

useEventListener(browserWindow, 'scroll', scheduleUpdate, { passive: true })
useEventListener(browserWindow, 'resize', scheduleUpdate, { passive: true })

onMounted(scheduleUpdate)

onBeforeUnmount(() => {
  if (frameId !== null)
    cancelAnimationFrame(frameId)
})
</script>
