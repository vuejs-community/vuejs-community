import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-version-injector',
  description: 'A universal plugin to inject version and build time into HTML (supports Vite, Webpack, Rspack, Rollup, Rolldown)',
  version: '2.3.1',
  category: 'plugin',
  tags: [
    'version',
    'injector',
    'unplugin',
    'webpack',
    'vite',
    'rspack',
    'rollup',
    'rolldown',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/nianyi778/unplugin-version-injector',
    npm: 'https://www.npmjs.com/package/unplugin-version-injector',
  },
  stats: {
    downloads: {
      monthly: 648,
      weekly: 17,
    },
  },
})
