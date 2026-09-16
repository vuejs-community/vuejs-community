import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-external',
  description: 'External dependencies when building',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'plugin',
    'external',
    'vite',
    'rollup',
    'webpack',
    'esbuild',
    'rspack',
    'farm',
    'rolldown',
  ],
  source: {
    npm: 'unplugin-external',
  },
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-external',
    website: 'https://github.com/litingyes/unplugin-external#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
