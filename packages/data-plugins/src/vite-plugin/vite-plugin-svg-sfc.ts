import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sfc',
  description: 'Convert SVGs to Vue single file component(SFC), support <style> tag',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'vue',
    'svg',
  ],
  links: {
    github: 'https://github.com/Kaciras/vite-plugin-svg-sfc',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sfc',
    website: 'https://github.com/Kaciras/vite-plugin-svg-sfc#readme',
  },
  source: {
    github: 'Kaciras/vite-plugin-svg-sfc',
    npm: 'vite-plugin-svg-sfc',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 374,
      weekly: 50,
    },
  },
})
