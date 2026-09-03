import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@inspecto-dev/plugin',
  description: 'Universal build tools plugin (Vite, Webpack, Rspack, Rollup, Esbuild) for Inspecto',
  version: '0.3.18',
  category: 'plugin',
  tags: [
    'ai',
    'devtools',
    'inspector',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/inspecto-dev/inspecto',
    npm: 'https://www.npmjs.com/package/@inspecto-dev/plugin',
  },
  stats: {
    downloads: {
      monthly: 221,
      weekly: 21,
    },
  },
})
