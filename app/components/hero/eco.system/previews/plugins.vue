<template>
  <div
    aria-label="Vite plugin workflow diagram: Build, Transform, Optimise, Dev Server, and Lint and Test"
    class="relative aspect-[4/3] w-full max-w-[36rem] select-none overflow-hidden font-mono"
    role="img"
  >
    <!-- Ambient light and the dashed plugin orbit -->
    <div class="absolute inset-[15%_10%_4%] rounded-[50%] bg-white/65 blur-3xl" />
    <div class="absolute left-[17%] top-[19%] h-[71%] w-[66%] rounded-[50%] border border-dashed border-neutral-300/60" />

    <!-- Radial connections -->
    <div class="absolute left-1/2 top-[11%] h-[37%] -translate-x-1/2 border-l border-dashed border-sky-200/80" />
    <div class="absolute left-[22%] top-[45%] w-[30%] origin-left rotate-[9deg] border-t border-dashed border-blue-200/80" />
    <div class="absolute right-[21%] top-[45%] w-[29%] origin-right -rotate-[10deg] border-t border-dashed border-lime-200/80" />
    <div class="absolute left-[31%] top-[79%] w-[27%] origin-left -rotate-[48deg] border-t border-dashed border-fuchsia-200/70" />
    <div class="absolute right-[29%] top-[78%] w-[27%] origin-right rotate-[50deg] border-t border-dashed border-emerald-200/75" />

    <!-- Build -->
    <div class="absolute left-1/2 top-[3%] z-10 flex h-[13%] w-[31%] -translate-x-1/2 items-center justify-center gap-[8%] rounded-full border-2 border-sky-100 bg-white/[0.92] text-[clamp(0.72rem,2.6vw,1.1rem)] font-semibold text-sky-500 shadow-[0_8px_24px_rgba(14,165,233,0.08),inset_0_0_14px_rgba(14,165,233,0.05)] backdrop-blur-sm">
      <div class="relative size-[1.45em]">
        <div class="absolute left-[24%] top-[15%] size-[52%] rotate-[30deg] border-2 border-sky-400 bg-sky-50" />
        <div class="absolute left-[8%] top-[35%] h-[52%] w-[45%] -skew-y-[30deg] border-b-2 border-l-2 border-sky-400 bg-sky-100/80" />
        <div class="absolute right-[8%] top-[35%] h-[52%] w-[45%] skew-y-[30deg] border-b-2 border-r-2 border-sky-500 bg-sky-200/55" />
      </div>
      <div>Build</div>
      <div class="absolute -bottom-[14%] left-1/2 size-[7px] -translate-x-1/2 rounded-[2px] bg-sky-400 shadow-[0_0_8px_2px_rgba(56,189,248,0.48)]" />
    </div>

    <!-- Transform -->
    <div class="absolute left-[1%] top-[37%] z-10 flex h-[14%] w-[37%] items-center justify-center gap-[8%] rounded-full border-2 border-blue-100 bg-white/[0.92] text-[clamp(0.66rem,2.35vw,1rem)] font-semibold text-blue-500 shadow-[0_8px_24px_rgba(59,130,246,0.08),inset_0_0_14px_rgba(59,130,246,0.05)] backdrop-blur-sm">
      <div class="grid size-[1.5em] grid-cols-2 gap-[12%] rotate-[-4deg]">
        <div class="rounded-[2px] bg-blue-300" />
        <div class="rounded-[2px] bg-blue-500" />
        <div class="rounded-[2px] bg-blue-500" />
        <div class="rounded-[2px] bg-blue-300" />
      </div>
      <div>Transform</div>
      <div class="absolute -bottom-[13%] left-[34%] size-[7px] rounded-[2px] bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.42)]" />
      <div class="absolute -bottom-[13%] right-[24%] size-[7px] rounded-[2px] bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.42)]" />
    </div>

    <!-- Optimise -->
    <div class="absolute right-[1%] top-[37%] z-10 flex h-[14%] w-[37%] items-center justify-center gap-[8%] rounded-full border-2 border-lime-100 bg-white/[0.92] text-[clamp(0.66rem,2.35vw,1rem)] font-semibold text-green-500 shadow-[0_8px_24px_rgba(34,197,94,0.08),inset_0_0_14px_rgba(34,197,94,0.05)] backdrop-blur-sm">
      <div class="flex h-[1.45em] w-[1.55em] items-end gap-[8%] border-b-2 border-l-2 border-green-400 px-[8%] pb-[8%]">
        <div class="h-[45%] flex-1 bg-green-300" />
        <div class="h-[72%] flex-1 bg-green-400" />
        <div class="h-[58%] flex-1 bg-green-300" />
        <div class="h-full flex-1 bg-green-500" />
      </div>
      <div>Optimise</div>
      <div class="absolute -bottom-[13%] left-[42%] size-[7px] rounded-[2px] bg-lime-400 shadow-[0_0_8px_2px_rgba(163,230,53,0.45)]" />
    </div>

    <!-- Dev Server -->
    <div class="absolute bottom-[5%] left-[10%] z-10 flex h-[14%] w-[39%] items-center justify-center gap-[8%] rounded-full border-2 border-neutral-200 bg-white/[0.94] text-[clamp(0.62rem,2.15vw,0.95rem)] font-semibold text-neutral-700 shadow-[0_8px_24px_rgba(23,23,23,0.08),inset_0_0_14px_rgba(23,23,23,0.03)] backdrop-blur-sm">
      <div class="flex aspect-square h-[55%] items-center justify-center rounded-[12%] bg-neutral-800 text-[0.8em] font-bold tracking-[-0.15em] text-neutral-200 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.12)]">
        &gt;_
      </div>
      <div>Dev Server</div>
      <div class="absolute -top-[13%] right-[34%] size-[7px] rounded-[2px] bg-fuchsia-300 shadow-[0_0_8px_2px_rgba(232,121,249,0.35)]" />
    </div>

    <!-- Lint & Test -->
    <div class="absolute bottom-[5%] right-[4%] z-10 flex h-[14%] w-[39%] items-center justify-center gap-[8%] rounded-full border-2 border-emerald-100 bg-white/[0.94] text-[clamp(0.62rem,2.15vw,0.95rem)] font-semibold text-neutral-700 shadow-[0_8px_24px_rgba(16,185,129,0.08),inset_0_0_14px_rgba(16,185,129,0.04)] backdrop-blur-sm">
      <div class="flex aspect-square h-[55%] items-center justify-center rounded-full bg-emerald-400 text-[1em] font-bold text-white shadow-[0_0_12px_rgba(52,211,153,0.25)]">
        ✓
      </div>
      <div>Lint &amp; Test</div>
      <div class="absolute -top-[13%] left-[34%] size-[7px] rounded-[2px] bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.4)]" />
    </div>

    <!-- Vite core -->
    <div class="absolute left-1/2 top-[55%] z-20 flex aspect-square w-[27%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/[0.96] shadow-[0_18px_45px_rgba(15,23,42,0.1),0_0_0_1px_rgba(226,232,240,0.65),inset_0_0_24px_rgba(99,102,241,0.035)]">
      <div class="relative flex items-center h-[48%] w-[50%] drop-shadow-[0_5px_7px_rgba(250,204,21,0.28)]">
        <Icon name="logos:vite" size="128" />
      </div>
    </div>

    <!-- Orbit signals -->
    <div class="absolute left-1/2 top-[23%] size-2 -translate-x-1/2 rounded-full bg-indigo-500 shadow-[0_0_9px_2px_rgba(99,102,241,0.5)]" />
    <div class="absolute left-[14%] top-[51%] size-1.5 rounded-full bg-blue-400 shadow-[0_0_7px_rgba(96,165,250,0.7)]" />
    <div class="absolute right-[14%] top-[51%] size-1.5 rounded-full bg-lime-400 shadow-[0_0_7px_rgba(163,230,53,0.7)]" />
    <div class="absolute bottom-[12%] left-[40%] size-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_7px_rgba(232,121,249,0.65)]" />
    <div class="absolute bottom-[12%] right-[34%] size-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(110,231,183,0.7)]" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PluginsPreviews',
})
</script>
