import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ggcv/vite-plugin-ssg',
  description: 'Vite plugin for Static Site Generation (SSG) — prerender Vue/React apps to static HTML at build time',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'prerender',
    'ssg',
    'ssr',
    'static-site-generation',
    'vite',
    'vite-plugin',
    'vue',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ggchivalrous/vite-plugins',
    npm: 'https://www.npmjs.com/package/@ggcv/vite-plugin-ssg',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
