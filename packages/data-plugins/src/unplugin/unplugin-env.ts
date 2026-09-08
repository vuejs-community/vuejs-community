import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-env',
  description: 'Register global imports on demand for Vite and Webpack',
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
    github: 'nikkolast88/unplugin-env',
    npm: 'unplugin-env',
  },
  links: {
    github: 'https://github.com/nikkolast88/unplugin-env',
    npm: 'https://www.npmjs.com/package/unplugin-env',
  },
  stats: {
    downloads: {
      monthly: 57,
      weekly: 5,
    },
  },
})
