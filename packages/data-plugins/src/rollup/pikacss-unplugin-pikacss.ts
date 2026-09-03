import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pikacss/unplugin-pikacss',
  description: 'PikaCSS bundler integration for the Rollup and Webpack families. Officially supported hosts are Vite, Rollup, Rolldown, Webpack, and Rspack.',
  version: '0.0.66',
  category: 'plugin',
  tags: [
    'pikacss',
    'atomic-css',
    'css-in-js',
    'atomic-css-in-js-engine',
    'unplugin',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'rolldown-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/pikacss/pikacss',
    npm: 'https://www.npmjs.com/package/@pikacss/unplugin-pikacss',
  },
  stats: {
    downloads: {
      monthly: 738,
      weekly: 226,
    },
  },
})
