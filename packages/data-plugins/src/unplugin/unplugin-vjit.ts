import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vjit',
  description: '',
  icon: 'icon:dark-unplugin',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'sope/sope',
    npm: 'unplugin-vjit',
  },
  links: {
    github: 'https://github.com/sope/sope',
    npm: 'https://www.npmjs.com/package/unplugin-vjit',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 4,
    },
  },
})
