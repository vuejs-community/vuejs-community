import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-import-lx',
  description: 'Register global imports on demand for Vite and Webpack',
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
    'auto-import',
    'transform',
  ],
  source: {
    github: 'antfu/unplugin-auto-import',
    npm: 'unplugin-auto-import-lx',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-auto-import',
    npm: 'https://www.npmjs.com/package/unplugin-auto-import-lx',
    website: 'https://github.com/antfu/unplugin-auto-import#readme',
  },
  stats: {
    stars: 3797,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
