import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ggcv/vite-plugin-ssg',
  description: 'Vite plugin for Static Site Generation (SSG) — prerender Vue/React apps to static HTML at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'prerender',
    'ssg',
    'ssr',
    'static-site-generation',
    'vite',
    'vite-plugin',
    'vue',
  ],
  source: {
    github: 'ggchivalrous/vite-plugins',
    npm: '@ggcv/vite-plugin-ssg',
  },
  links: {
    github: 'https://github.com/ggchivalrous/vite-plugins',
    npm: 'https://www.npmjs.com/package/@ggcv/vite-plugin-ssg',
    website: 'https://github.com/ggchivalrous/vite-plugins/tree/master/packages/vite-ssg#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
