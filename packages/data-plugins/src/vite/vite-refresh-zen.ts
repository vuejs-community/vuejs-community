import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-refresh-zen',
  description: 'Pause and resume Vite HMR - batch file changes and apply them all at once',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'hot-module-replacement',
    'batch',
    'pause',
    'refresh',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aussieljk/vite-refresh-zen',
    npm: 'https://www.npmjs.com/package/vite-refresh-zen',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
