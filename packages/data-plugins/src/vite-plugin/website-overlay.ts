import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'website-overlay',
  description: 'Click any UI element, describe changes, hand off to your AI coding tool. Browser extension + optional sidecar + framework plugins.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'aryanjain1891/website-overlay',
    npm: 'website-overlay',
  },
  links: {
    github: 'https://github.com/aryanjain1891/website-overlay',
    npm: 'https://www.npmjs.com/package/website-overlay',
    website: 'https://github.com/aryanjain1891/website-overlay',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
