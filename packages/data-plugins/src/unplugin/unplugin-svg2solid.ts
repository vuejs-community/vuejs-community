import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svg2solid',
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
    github: 'https://github.com/antfu/unplugin-svg2solid',
    npm: 'https://www.npmjs.com/package/unplugin-svg2solid',
    website: 'https://github.com/antfu/unplugin-svg2solid#readme',
  },
  source: {
    github: 'antfu/unplugin-svg2solid',
    npm: 'unplugin-svg2solid',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
