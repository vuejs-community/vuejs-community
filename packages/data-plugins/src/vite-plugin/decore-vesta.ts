import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@decore/vesta',
  description: 'Vite plugin for building server and SSR applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'server',
    'ssr',
  ],
  source: {
    github: 'stenin-nikita/decore-monorepo',
    npm: '@decore/vesta',
  },
  links: {
    github: 'https://github.com/stenin-nikita/decore-monorepo',
    npm: 'https://www.npmjs.com/package/@decore/vesta',
    website: 'https://github.com/stenin-nikita/decore-monorepo#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
