import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chuckcchen/vite-adapter',
  description: 'EdgeOne adapter for native Vite projects (SPA and SSR)',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'edgeone',
    'adapter',
    'spa',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@chuckcchen/vite-adapter',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
