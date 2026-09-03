import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sfc',
  description: 'Convert SVGs to Vue single file component(SFC), support <style> tag',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'vue',
    'svg',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Kaciras/vite-plugin-svg-sfc',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sfc',
  },
  stats: {
    downloads: {
      monthly: 423,
      weekly: 96,
    },
  },
})
