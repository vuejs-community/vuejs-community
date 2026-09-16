import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-less-glob-import',
  description: 'Use glob syntax for imports in your main less file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'less',
  ],
  source: {
    github: 'shamin/vite-plugin-less-glob-import',
    npm: 'vite-plugin-less-glob-import',
  },
  links: {
    github: 'https://github.com/shamin/vite-plugin-less-glob-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-less-glob-import',
    website: 'https://github.com/shamin/vite-plugin-less-glob-import#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 956,
      weekly: 146,
    },
  },
})
