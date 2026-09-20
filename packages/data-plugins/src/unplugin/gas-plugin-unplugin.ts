import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gas-plugin/unplugin',
  description: 'Universal bundler plugin for Google Apps Script projects (Vite, Rollup, Rolldown, webpack, esbuild, Bun)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/wakita181009/gas-plugin',
    npm: 'https://www.npmjs.com/package/@gas-plugin/unplugin',
  },
  source: {
    github: 'wakita181009/gas-plugin',
    npm: '@gas-plugin/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 343,
      weekly: 101,
    },
  },
})
