import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-scripts',
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
  links: {
    github: 'https://github.com/antfu/unplugin-scripts',
    npm: 'https://www.npmjs.com/package/unplugin-scripts',
    website: 'https://github.com/antfu/unplugin-scripts#readme',
  },
  source: {
    github: 'antfu/unplugin-scripts',
    npm: 'unplugin-scripts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
