import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@torpor/unplugin',
  description: 'Unplugin package to compile Torpor components for Vite, Rollup, and other bundlers',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'torpor',
    'unplugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@torpor/unplugin',
  },
  source: {
    npm: '@torpor/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 763,
      weekly: 451,
    },
  },
})
