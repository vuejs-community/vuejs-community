import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-replace-lodash',
  description: 'Replacing the import of lodash with lodash-es is more beneficial to tree-shaking',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'lodash',
  ],
  links: {
    github: 'https://github.com/mingtianyihou33/vite-plugin-replace-lodash',
    npm: 'https://www.npmjs.com/package/vite-plugin-replace-lodash',
    website: 'https://github.com/mingtianyihou33/vite-plugin-replace-lodash#readme',
  },
  source: {
    github: 'mingtianyihou33/vite-plugin-replace-lodash',
    npm: 'vite-plugin-replace-lodash',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 156,
      weekly: 19,
    },
  },
})
