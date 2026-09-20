import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-deploy-info',
  description: 'print some help info like vite builtin',
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
    github: 'https://github.com/elonehoo/unplugin-deploy-info',
    npm: 'https://www.npmjs.com/package/unplugin-deploy-info',
    website: 'https://github.com/elonehoo/unplugin-deploy-info#readme',
  },
  source: {
    github: 'elonehoo/unplugin-deploy-info',
    npm: 'unplugin-deploy-info',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 56,
      weekly: 12,
    },
  },
})
