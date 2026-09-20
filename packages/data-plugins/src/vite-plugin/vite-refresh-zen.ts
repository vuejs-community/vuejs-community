import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-refresh-zen',
  description: 'Pause and resume Vite HMR - batch file changes and apply them all at once',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'hot-module-replacement',
    'batch',
    'pause',
    'refresh',
  ],
  links: {
    github: 'https://github.com/aussieljk/vite-refresh-zen',
    npm: 'https://www.npmjs.com/package/vite-refresh-zen',
    website: 'https://github.com/aussieljk/vite-refresh-zen#readme',
  },
  source: {
    github: 'aussieljk/vite-refresh-zen',
    npm: 'vite-refresh-zen',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 26,
    },
  },
})
