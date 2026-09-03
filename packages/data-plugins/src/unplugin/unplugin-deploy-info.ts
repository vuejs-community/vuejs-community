import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-deploy-info',
  description: 'print some help info like vite builtin',
  version: '0.0.3',
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
  links: {
    github: 'https://github.com/elonehoo/unplugin-deploy-info',
    npm: 'https://www.npmjs.com/package/unplugin-deploy-info',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 14,
    },
  },
})
