import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@intaj/vite',
  description: 'Vite plugin: environments, SSR, per-route ssr/spa/ssg (RFC 0003)',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'intaj',
    'framework',
    'fullstack',
    'vite',
    'vite-plugin',
    'ssr',
    'ssg',
    'spa',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/intaj-dev/intaj',
    npm: 'https://www.npmjs.com/package/@intaj/vite',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
