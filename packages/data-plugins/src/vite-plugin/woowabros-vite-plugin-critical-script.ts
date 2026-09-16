import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@woowabros/vite-plugin-critical-script',
  description: 'Vite plugin to inline TypeScript modules as critical HTML scripts that run before the main JS bundle — for API prefetch, asset preload, webview bridge, LCP optimization',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'woowabros/critical-script',
    npm: '@woowabros/vite-plugin-critical-script',
  },
  links: {
    github: 'https://github.com/woowabros/critical-script',
    npm: 'https://www.npmjs.com/package/@woowabros/vite-plugin-critical-script',
    website: 'https://woowabros.github.io/critical-script',
  },
  stats: {
    stars: 213,
    downloads: {
      monthly: 86,
      weekly: 4,
    },
  },
})
