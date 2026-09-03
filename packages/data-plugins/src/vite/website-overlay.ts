import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'website-overlay',
  description: 'Click any UI element, describe changes, hand off to your AI coding tool. Browser extension + optional sidecar + framework plugins.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'browser-extension',
    'ui',
    'overlay',
    'ai',
    'claude',
    'cursor',
    'vite-plugin',
    'webpack-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aryanjain1891/website-overlay',
    npm: 'https://www.npmjs.com/package/website-overlay',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
