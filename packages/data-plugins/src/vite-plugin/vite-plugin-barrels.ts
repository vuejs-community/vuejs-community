import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-barrels',
  description: 'Create barrels automatically via Vite!',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'barrel',
  ],
  source: {
    github: 'BlueFrog130/vite-plugin-barrels',
    npm: 'vite-plugin-barrels',
  },
  links: {
    github: 'https://github.com/BlueFrog130/vite-plugin-barrels',
    npm: 'https://www.npmjs.com/package/vite-plugin-barrels',
    website: 'https://github.com/BlueFrog130/vite-plugin-barrels#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
