import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohbug/unplugin',
  description: 'Unplugin for upload your sourceMap files to Ohbug',
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
    'ohbug',
  ],
  links: {
    github: 'https://github.com/ohbug-org/unplugin-ohbug',
    npm: 'https://www.npmjs.com/package/@ohbug/unplugin',
    website: 'https://github.com/ohbug-org/unplugin-ohbug',
  },
  source: {
    github: 'ohbug-org/unplugin-ohbug',
    npm: '@ohbug/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
