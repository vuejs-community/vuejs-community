import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-inject-css',
  description: 'A Vite plugin that takes the CSS and injects it via JS using CSSStyleSheet.insertRule()',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'stasadance/vite-inject-css',
    npm: 'vite-inject-css',
  },
  links: {
    github: 'https://github.com/stasadance/vite-inject-css',
    npm: 'https://www.npmjs.com/package/vite-inject-css',
    website: 'https://github.com/stasadance/vite-inject-css#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 24,
      weekly: 4,
    },
  },
})
