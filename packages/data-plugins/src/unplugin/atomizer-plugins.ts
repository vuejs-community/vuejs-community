import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'atomizer-plugins',
  description: 'Atomizer plugins for esbuild, Rollup, Vite and Webpack',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'atomizer',
    'plugin',
    'rollup',
    'rollup-plugin',
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/acss-io/atomizer',
    npm: 'https://www.npmjs.com/package/atomizer-plugins',
  },
  stats: {
    downloads: {
      monthly: 154,
      weekly: 31,
    },
  },
})
