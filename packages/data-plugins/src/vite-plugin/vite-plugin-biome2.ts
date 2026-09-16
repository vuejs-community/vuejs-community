import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-biome2',
  description: 'Biome plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'biome',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-biome2',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-biome2',
    website: 'https://github.com/skrulling/vite-plugin-biome',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
