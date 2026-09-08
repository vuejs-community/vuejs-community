import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-less-glob-import',
  description: 'Use glob syntax for imports in your main less file.',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'less',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'shamin/vite-plugin-less-glob-import',
    npm: 'vite-plugin-less-glob-import',
  },
  links: {
    github: 'https://github.com/shamin/vite-plugin-less-glob-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-less-glob-import',
  },
  stats: {
    downloads: {
      monthly: 816,
      weekly: 96,
    },
  },
})
