import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@decore/vesta',
  description: 'Vite plugin for building server and SSR applications.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'server',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stenin-nikita/decore-monorepo',
    npm: 'https://www.npmjs.com/package/@decore/vesta',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
