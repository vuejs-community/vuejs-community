import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'litestar-vite-plugin',
  description: 'Litestar plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'litestar',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'litestar-org/litestar-vite',
    npm: 'litestar-vite-plugin',
  },
  links: {
    github: 'https://github.com/litestar-org/litestar-vite',
    npm: 'https://www.npmjs.com/package/litestar-vite-plugin',
    website: 'https://github.com/litestar-org/litestar-vite',
  },
  stats: {
    stars: 36,
    downloads: {
      monthly: 8686,
      weekly: 1949,
    },
  },
})
