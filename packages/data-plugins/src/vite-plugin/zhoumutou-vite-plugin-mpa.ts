import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zhoumutou/vite-plugin-mpa',
  description: 'A Vite plugin for Multi-Page Applications (MPA)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mpa',
    'multi-page',
    'html',
  ],
  links: {
    github: 'https://github.com/zhoumutou/vite-plugin-mpa',
    npm: 'https://www.npmjs.com/package/@zhoumutou/vite-plugin-mpa',
    website: 'https://github.com/zhoumutou/vite-plugin-mpa#readme',
  },
  source: {
    github: 'zhoumutou/vite-plugin-mpa',
    npm: '@zhoumutou/vite-plugin-mpa',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 115,
      weekly: 29,
    },
  },
})
