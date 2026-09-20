import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-version-injector',
  description: 'A universal plugin to inject version and build time into HTML (supports Vite, Webpack, Rspack, Rollup, Rolldown)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/nianyi778/unplugin-version-injector',
    npm: 'https://www.npmjs.com/package/unplugin-version-injector',
    website: 'https://github.com/nianyi778/unplugin-version-injector#readme',
  },
  source: {
    github: 'nianyi778/unplugin-version-injector',
    npm: 'unplugin-version-injector',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 151,
      weekly: 20,
    },
  },
})
