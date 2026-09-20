import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-critical-css',
  description: 'Extract <style critical> blocks from Vue 3 SFCs into a single inline-able payload. Per-route splitting, scoped-style aware, dev HMR, SSR-friendly. Drops your Speed Index and LCP without adding a headless browser to your build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'vue-sfc',
    'critical-css',
    'above-the-fold',
    'ssr',
    'performance',
    'lighthouse',
    'lcp',
    'fcp',
    'speed-index',
    'fouc',
    'render-blocking',
  ],
  links: {
    github: 'https://github.com/semirbabajic/vite-plugin-vue-critical-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-critical-css',
    website: 'https://github.com/semirbabajic/vite-plugin-vue-critical-css#readme',
  },
  source: {
    github: 'semirbabajic/vite-plugin-vue-critical-css',
    npm: 'vite-plugin-vue-critical-css',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
