import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chuckcchen/vite-adapter',
  description: 'EdgeOne adapter for native Vite projects (SPA and SSR)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'edgeone',
    'adapter',
    'spa',
    'ssr',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@chuckcchen/vite-adapter',
  },
  source: {
    npm: '@chuckcchen/vite-adapter',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
