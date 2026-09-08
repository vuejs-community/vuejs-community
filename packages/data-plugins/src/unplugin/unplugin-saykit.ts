import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-saykit',
  description: 'Universal build tool plugin for saykit (Vite, Rollup, Webpack, esbuild)',
  icon: 'icon:dark-unplugin',
  version: '0.10.0',
  category: 'plugin',
  tags: [
    'i18n',
    'rollup',
    'saykit',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'k0d13/saykit',
    npm: 'unplugin-saykit',
  },
  links: {
    github: 'https://github.com/k0d13/saykit',
    npm: 'https://www.npmjs.com/package/unplugin-saykit',
  },
  stats: {
    downloads: {
      monthly: 2464,
      weekly: 30,
    },
  },
})
