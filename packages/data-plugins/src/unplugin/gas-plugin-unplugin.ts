import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gas-plugin/unplugin',
  description: 'Universal bundler plugin for Google Apps Script projects (Vite, Rollup, Rolldown, webpack, esbuild, Bun)',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'rolldown',
    'webpack',
    'esbuild',
    'bun',
    'google-apps-script',
    'gas',
    'clasp',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wakita181009/gas-plugin',
    npm: 'https://www.npmjs.com/package/@gas-plugin/unplugin',
  },
  stats: {
    downloads: {
      monthly: 413,
      weekly: 54,
    },
  },
})
