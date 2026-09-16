import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svg-solid2comp',
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
    github: 'antfu/unplugin-svg2solidcomp',
    npm: 'unplugin-svg-solid2comp',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-svg2solidcomp',
    npm: 'https://www.npmjs.com/package/unplugin-svg-solid2comp',
    website: 'https://github.com/antfu/unplugin-svg2solidcomp#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
