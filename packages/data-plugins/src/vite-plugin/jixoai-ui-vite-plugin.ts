import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jixoai/ui-vite-plugin',
  description: 'Vite plugin supplying the pinned ghostty-vt wasm: resolve (env -> cache -> verified download) -> serve (dev middleware) -> emit (content-addressed asset) -> hand over the URL via the virtual:jixoai-ghostty module. Also ships the icon system (svg/lucide/fo',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'jixoai',
    'vite',
    'vite-plugin',
    'ghostty',
    'wasm',
    'terminal',
    'icons',
  ],
  source: {
    github: 'jixoai/ui',
    npm: '@jixoai/ui-vite-plugin',
  },
  links: {
    github: 'https://github.com/jixoai/ui',
    npm: 'https://www.npmjs.com/package/@jixoai/ui-vite-plugin',
    website: 'https://github.com/jixoai/ui#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
