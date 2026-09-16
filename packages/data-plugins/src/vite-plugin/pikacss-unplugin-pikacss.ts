import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pikacss/unplugin-pikacss',
  description: 'PikaCSS bundler integration for the Rollup and Webpack families. Officially supported hosts are Vite, Rollup, Rolldown, Webpack, and Rspack.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'pikacss/pikacss',
    npm: '@pikacss/unplugin-pikacss',
  },
  links: {
    github: 'https://github.com/pikacss/pikacss',
    npm: 'https://www.npmjs.com/package/@pikacss/unplugin-pikacss',
    website: 'https://pikacss.github.io',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 1197,
      weekly: 240,
    },
  },
})
