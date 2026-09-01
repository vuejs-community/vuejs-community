<template>
  <div
    aria-label="VueUse composables relationship diagram"
    class="relative aspect-[10/11] w-full max-w-[35rem] select-none"
    role="img"
  >
    <!-- Soft ambient glow -->
    <div class="absolute inset-[12%] rounded-full bg-white/75 blur-3xl" />

    <!-- Dashed orbit and radial connectors -->
    <div
      class="absolute left-[17%] top-[20%] h-[63%] w-[66%] rounded-[50%] border border-dashed border-neutral-300/65"
    />
    <div class="absolute left-1/2 top-[9%] h-[82%] border-l border-dashed border-neutral-300/60" />
    <div class="absolute left-1/2 top-1/2 w-[42%] origin-left -rotate-[146deg] border-t border-dashed border-neutral-300/55" />
    <div class="absolute left-1/2 top-1/2 w-[42%] origin-left -rotate-[34deg] border-t border-dashed border-neutral-300/55" />
    <div class="absolute left-1/2 top-1/2 w-[43%] origin-left rotate-[145deg] border-t border-dashed border-neutral-300/55" />
    <div class="absolute left-1/2 top-1/2 w-[43%] origin-left rotate-[35deg] border-t border-dashed border-neutral-300/55" />

    <!-- Top: useFetch -->
    <div
      class="absolute left-1/2 top-[4%] flex h-[11.5%] w-[31%] -translate-x-1/2 items-center justify-center rounded-full border-2 border-emerald-200/90 bg-white/90 font-mono text-[clamp(0.65rem,2.6vw,1rem)] font-semibold text-emerald-500 shadow-[0_0_22px_rgba(16,185,129,0.12),inset_0_0_12px_rgba(16,185,129,0.05)] backdrop-blur-sm"
    >
      useFetch
      <div class="absolute -bottom-[17%] left-1/2 size-[7px] -translate-x-1/2 rounded-[2px] bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.55)]" />
    </div>

    <!-- Upper left: useStorage -->
    <div
      class="absolute left-[2%] top-[28%] flex h-[11.5%] w-[34%] items-center justify-center rounded-full border-2 border-violet-200/90 bg-white/90 font-mono text-[clamp(0.6rem,2.4vw,0.95rem)] font-semibold text-violet-600 shadow-[0_0_22px_rgba(124,58,237,0.12),inset_0_0_12px_rgba(124,58,237,0.05)] backdrop-blur-sm"
    >
      useStorage
      <div class="absolute -bottom-[13%] right-[20%] size-[7px] rounded-[2px] bg-violet-600 shadow-[0_0_8px_2px_rgba(124,58,237,0.5)]" />
    </div>

    <!-- Upper right: useEventListener -->
    <div
      class="absolute right-[1%] top-[26.5%] flex h-[11.5%] w-[38%] items-center justify-center rounded-full border-2 border-indigo-200/90 bg-white/90 font-mono text-[clamp(0.52rem,2vw,0.84rem)] font-semibold text-indigo-600 shadow-[0_0_22px_rgba(79,70,229,0.12),inset_0_0_12px_rgba(79,70,229,0.05)] backdrop-blur-sm"
    >
      useEventListener
      <div class="absolute -bottom-[13%] left-[20%] size-[7px] rounded-[2px] bg-indigo-600 shadow-[0_0_8px_2px_rgba(79,70,229,0.5)]" />
    </div>

    <!-- Lower left: useAsyncState -->
    <div
      class="absolute left-[7%] top-[66%] flex h-[11.5%] w-[35%] items-center justify-center rounded-full border-2 border-cyan-200/90 bg-white/90 font-mono text-[clamp(0.55rem,2.2vw,0.9rem)] font-semibold text-cyan-600 shadow-[0_0_22px_rgba(8,145,178,0.12),inset_0_0_12px_rgba(8,145,178,0.05)] backdrop-blur-sm"
    >
      useAsyncState
      <div class="absolute -top-[13%] right-[20%] size-[7px] rounded-[2px] bg-cyan-500 shadow-[0_0_8px_2px_rgba(6,182,212,0.5)]" />
    </div>

    <!-- Lower right: useClipboard -->
    <div
      class="absolute right-[5%] top-[64%] flex h-[11.5%] w-[35%] items-center justify-center rounded-full border-2 border-orange-200/90 bg-white/90 font-mono text-[clamp(0.55rem,2.2vw,0.9rem)] font-semibold text-orange-500 shadow-[0_0_22px_rgba(249,115,22,0.12),inset_0_0_12px_rgba(249,115,22,0.05)] backdrop-blur-sm"
    >
      useClipboard
      <div class="absolute -top-[13%] left-[20%] size-[7px] rounded-[2px] bg-orange-500 shadow-[0_0_8px_2px_rgba(249,115,22,0.5)]" />
    </div>

    <!-- Bottom: useMouse -->
    <div
      class="absolute bottom-[2%] left-1/2 flex h-[11.5%] w-[34%] -translate-x-1/2 items-center justify-center rounded-full border-2 border-amber-200/90 bg-white/90 font-mono text-[clamp(0.65rem,2.6vw,1rem)] font-semibold text-amber-500 shadow-[0_0_22px_rgba(245,158,11,0.12),inset_0_0_12px_rgba(245,158,11,0.05)] backdrop-blur-sm"
    >
      useMouse
      <div class="absolute -top-[16%] left-1/2 size-[7px] -translate-x-1/2 rounded-[2px] bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.55)]" />
    </div>

    <!-- Small signals distributed along the orbit -->
    <div class="absolute left-[25.5%] top-[29%] size-1.5 rounded-full bg-violet-300 shadow-[0_0_7px_rgba(167,139,250,0.8)]" />
    <div class="absolute right-[25%] top-[29%] size-1.5 rounded-full bg-indigo-400 shadow-[0_0_7px_rgba(99,102,241,0.8)]" />
    <div class="absolute left-[31%] top-[63%] size-2 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
    <div class="absolute right-[31%] top-[61%] size-2 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
    <div class="absolute left-1/2 top-[20.5%] size-2 -translate-x-1/2 rotate-45 rounded-[2px] bg-slate-200" />
    <div class="absolute bottom-[19%] left-1/2 size-3 -translate-x-1/2 rounded-full bg-emerald-300/70 shadow-[0_0_9px_rgba(110,231,183,0.7)]" />

    <!-- VueUse core -->
    <div
      class="absolute left-1/2 top-1/2 z-10 flex aspect-square w-[21%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-300/70 bg-gradient-to-br from-emerald-400 to-emerald-500 font-mono text-[clamp(0.7rem,2.8vw,1.1rem)] font-semibold text-white shadow-[0_12px_34px_rgba(16,185,129,0.25),inset_0_1px_2px_rgba(255,255,255,0.55)]"
    >
      VueUse
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HooksPreviews',
})
</script>
