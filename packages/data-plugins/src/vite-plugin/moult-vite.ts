import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@moult/vite',
  description: 'Vite HMR bridge that maps module updates to Moult lifecycle operations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'hot-reload',
    'plugin-runtime',
    'lifecycle',
  ],
  source: {
    github: 'neryva-lab/moult',
    npm: '@moult/vite',
  },
  links: {
    github: 'https://github.com/neryva-lab/moult',
    npm: 'https://www.npmjs.com/package/@moult/vite',
    website: 'https://github.com/neryva-lab/moult#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
