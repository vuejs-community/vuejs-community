import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@line-copy-open/vite',
  description: '🚀 A vite plugin for fast find source code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'open-editor',
    'vite-plugin',
    'vue-devtools',
    'react-devtools',
  ],
  source: {
    github: 'zjxxxxxxxxx/open-editor',
    npm: '@line-copy-open/vite',
  },
  links: {
    github: 'https://github.com/zjxxxxxxxxx/open-editor',
    npm: 'https://www.npmjs.com/package/@line-copy-open/vite',
    website: 'https://github.com/zjxxxxxxxxx/open-editor#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
