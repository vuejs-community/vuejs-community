import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inspecto-dev/plugin',
  description: 'Universal build tools plugin (Vite, Webpack, Rspack, Rollup, Esbuild) for Inspecto',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'inspecto-dev/inspecto',
    npm: '@inspecto-dev/plugin',
  },
  links: {
    github: 'https://github.com/inspecto-dev/inspecto',
    npm: 'https://www.npmjs.com/package/@inspecto-dev/plugin',
    website: 'https://github.com/inspecto-dev/inspecto/tree/main/packages/plugin#readme',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 197,
      weekly: 35,
    },
  },
})
