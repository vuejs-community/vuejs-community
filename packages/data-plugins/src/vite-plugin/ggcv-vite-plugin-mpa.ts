import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ggcv/vite-plugin-mpa',
  description: 'Vite 多页应用插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mpa',
    'vite',
    'vite-plugin',
    'vue',
  ],
  source: {
    github: 'ggchivalrous/vite-plugins',
    npm: '@ggcv/vite-plugin-mpa',
  },
  links: {
    github: 'https://github.com/ggchivalrous/vite-plugins',
    npm: 'https://www.npmjs.com/package/@ggcv/vite-plugin-mpa',
    website: 'https://github.com/ggchivalrous/vite-plugins/tree/master/packages/vite-mpa#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
