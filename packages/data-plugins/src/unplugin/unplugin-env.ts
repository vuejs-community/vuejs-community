import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-env',
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
    'transform',
  ],
  source: {
    github: 'nikkolast88/unplugin-env',
    npm: 'unplugin-env',
  },
  links: {
    github: 'https://github.com/nikkolast88/unplugin-env',
    npm: 'https://www.npmjs.com/package/unplugin-env',
    website: 'https://github.com/nikkolast88/unplugin-env#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 29,
      weekly: 3,
    },
  },
})
