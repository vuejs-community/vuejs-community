<template>
  <div
    aria-label="Nuxt module ecosystem: Content, Image, SEO, i18n and DevTools"
    class="relative aspect-square w-full max-w-[620px] select-none"
    role="img"
  >
    <!-- Connectors -->
    <div class="absolute left-[33%] top-[18%] h-px w-[13%] origin-left rotate-[55deg] bg-blue-300/70">
      <div class="absolute -left-1 -top-1 size-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.55)]" />
      <div class="absolute -right-1 -top-1 size-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.55)]" />
    </div>

    <div class="absolute left-[68%] top-[17%] h-px w-[12%] origin-left rotate-[124deg] bg-emerald-300/70">
      <div class="absolute -left-1 -top-1 size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.55)]" />
      <div class="absolute -right-1 -top-1 size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.55)]" />
    </div>

    <div class="absolute left-[75%] top-[50%] h-px w-[10%] bg-orange-300/70">
      <div class="absolute -left-1 -top-1 size-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.55)]" />
      <div class="absolute -right-1 -top-1 size-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.55)]" />
    </div>

    <div class="absolute left-[65%] top-[75%] h-px w-[13%] origin-left rotate-[55deg] bg-sky-300/70">
      <div class="absolute -left-1 -top-1 size-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.55)]" />
      <div class="absolute -right-1 -top-1 size-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.55)]" />
    </div>

    <div class="absolute left-[23%] top-[73%] h-px w-[13%] origin-right rotate-[-52deg] bg-violet-300/70">
      <div class="absolute -left-1 -top-1 size-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.55)]" />
      <div class="absolute -right-1 -top-1 size-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.55)]" />
    </div>

    <!-- Module labels -->
    <div class="absolute left-[7%] top-[5%] flex h-[11%] w-[31%] items-center justify-center gap-[6%] whitespace-nowrap rounded-full border border-blue-200 bg-white/90 px-[3%] text-[clamp(8.5px,2.3vw,15px)] font-semibold text-slate-700 shadow-[0_8px_24px_rgba(59,130,246,0.08)] backdrop-blur-sm">
      <div class="grid aspect-square h-[45%] place-items-center rounded-full bg-blue-50 text-[0.72em] font-bold text-blue-500">
        C
      </div>
      <div>@nuxt/content</div>
    </div>

    <div class="absolute right-[5%] top-[5%] flex h-[11%] w-[31%] items-center justify-center gap-[6%] whitespace-nowrap rounded-full border border-emerald-200 bg-white/90 px-[3%] text-[clamp(8.5px,2.3vw,15px)] font-semibold text-emerald-600 shadow-[0_8px_24px_rgba(16,185,129,0.08)] backdrop-blur-sm">
      <div class="relative aspect-square h-[45%] rounded-full bg-emerald-50">
        <div class="absolute bottom-[22%] left-[20%] h-[36%] w-[58%] rotate-[-8deg] rounded-sm border-2 border-emerald-400" />
        <div class="absolute right-[23%] top-[23%] size-[16%] rounded-full bg-emerald-400" />
      </div>
      <div>@nuxt/image</div>
    </div>

    <div class="absolute right-[1%] top-[44.5%] flex h-[11%] w-[25%] items-center justify-center gap-[8%] whitespace-nowrap rounded-full border border-orange-200 bg-white/90 px-[3%] text-[clamp(8.5px,2.3vw,15px)] font-semibold text-slate-700 shadow-[0_8px_24px_rgba(249,115,22,0.08)] backdrop-blur-sm">
      <div class="grid aspect-square h-[45%] place-items-center rounded-full bg-orange-50 text-[0.72em] font-bold text-orange-500">
        S
      </div>
      <div>Nuxt SEO</div>
    </div>

    <div class="absolute bottom-[4%] right-[8%] flex h-[11%] w-[31%] items-center justify-center gap-[6%] whitespace-nowrap rounded-full border border-sky-200 bg-white/90 px-[3%] text-[clamp(8.5px,2.3vw,15px)] font-semibold text-slate-700 shadow-[0_8px_24px_rgba(14,165,233,0.08)] backdrop-blur-sm">
      <div class="grid aspect-square h-[45%] place-items-center rounded-full bg-sky-50 text-[0.72em] font-bold text-sky-500">
        文
      </div>
      <div>@nuxtjs/i18n</div>
    </div>

    <div class="absolute bottom-[14%] left-[1%] flex h-[11%] w-[31%] items-center justify-center gap-[6%] whitespace-nowrap rounded-full border border-violet-200 bg-white/90 px-[3%] text-[clamp(8.5px,2.3vw,15px)] font-semibold text-violet-700 shadow-[0_8px_24px_rgba(139,92,246,0.08)] backdrop-blur-sm">
      <div class="grid aspect-square h-[45%] place-items-center rounded-full bg-violet-50 text-[0.72em] font-bold text-violet-500">
        D
      </div>
      <div>Nuxt DevTools</div>
    </div>

    <!-- Segmented module ring -->
    <div
      class="absolute left-1/2 top-1/2 aspect-square w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_-1deg,#8de3c5_0deg,#8de3c5_70deg,#fff_70deg,#fff_72deg,#ffb49e_72deg,#ffb49e_142deg,#fff_142deg,#fff_144deg,#9bd0f1_144deg,#9bd0f1_214deg,#fff_214deg,#fff_216deg,#cdb0ec_216deg,#cdb0ec_286deg,#fff_286deg,#fff_288deg,#b8cdf4_288deg,#b8cdf4_358deg,#fff_358deg)] shadow-[0_12px_44px_rgba(148,163,184,0.14)]"
    >
      <div class="absolute inset-[10%] rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(226,232,240,0.9),0_10px_30px_rgba(148,163,184,0.16)]">
        <!-- Nuxt logo, drawn with divs -->
        <div class="absolute left-1/2 top-1/2 h-[27%] w-[43%] -translate-x-1/2 -translate-y-1/2">
          <div class="absolute bottom-0 left-0 h-full w-[68%] bg-emerald-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]">
            <div class="absolute bottom-[-2%] left-[20%] h-[71%] w-[60%] bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
          </div>
          <div class="absolute bottom-0 right-0 h-[78%] w-[56%] bg-emerald-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]">
            <div class="absolute bottom-[-2%] left-[22%] h-[65%] w-[56%] bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ModulesPreviews',
})
</script>
