import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-inject-css',
  description: 'A Vite plugin that takes the CSS and injects it via JS using CSSStyleSheet.insertRule()',
  version: '3.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'typescript',
    'css-injected-by-js',
    'single-js-file',
    'css',
    'js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stasadance/vite-inject-css',
    npm: 'https://www.npmjs.com/package/vite-inject-css',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 9,
    },
  },
})
