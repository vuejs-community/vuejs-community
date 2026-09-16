import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'yunji-tagger',
  description: 'The plugin for tagging components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'plugin',
    'tagger',
    'vite',
    'vite-plugin',
    'webpack-plugin',
  ],
  source: {
    github: 'kiwitap001/yunji-tagger',
    npm: 'yunji-tagger',
  },
  links: {
    github: 'https://github.com/kiwitap001/yunji-tagger',
    npm: 'https://www.npmjs.com/package/yunji-tagger',
    website: 'https://github.com/kiwitap001/yunji-tagger#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 80,
      weekly: 12,
    },
  },
})
