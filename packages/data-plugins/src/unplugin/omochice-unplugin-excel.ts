import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@omochice/unplugin-excel',
  description: 'plugin for bundling excel files with unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/Omochice/unplugin-excel',
    npm: 'https://www.npmjs.com/package/@omochice/unplugin-excel',
    website: 'https://github.com/Omochice/unplugin-excel#readme',
  },
  source: {
    github: 'Omochice/unplugin-excel',
    npm: '@omochice/unplugin-excel',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
