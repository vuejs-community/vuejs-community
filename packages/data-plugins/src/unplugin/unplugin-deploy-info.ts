import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-deploy-info',
  description: 'print some help info like vite builtin',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'elonehoo/unplugin-deploy-info',
    npm: 'unplugin-deploy-info',
  },
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
