import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-critical-css',
  description: 'Extract <style critical> blocks from Vue 3 SFCs into a single inline-able payload. Per-route splitting, scoped-style aware, dev HMR, SSR-friendly. Drops your Speed Index and LCP without adding a headless browser to your build.',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/semirbabajic/vite-plugin-vue-critical-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-critical-css',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 1,
    },
  },
})
