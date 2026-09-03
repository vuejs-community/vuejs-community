import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@woowabros/vite-plugin-critical-script',
  description: 'Vite plugin to inline TypeScript modules as critical HTML scripts that run before the main JS bundle — for API prefetch, asset preload, webview bridge, LCP optimization',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'critical',
    'critical-script',
    'inline-script',
    'prefetch',
    'preload',
    'webview',
    'lcp',
    'performance',
    'react-router',
    'tanstack-start',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/woowabros/critical-script',
    npm: 'https://www.npmjs.com/package/@woowabros/vite-plugin-critical-script',
  },
  stats: {
    downloads: {
      monthly: 391,
      weekly: 25,
    },
  },
})
