import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tdh-ui/unplugin-tdh-ui',
  description: 'Import TDH UI Base on demand. Support Vite, Webpack, Vue CLI, Rollup and esbuild.',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'tdh-ui-base',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'plugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@tdh-ui/unplugin-tdh-ui',
  },
  stats: {
    downloads: {
      monthly: 259,
      weekly: 33,
    },
  },
})
