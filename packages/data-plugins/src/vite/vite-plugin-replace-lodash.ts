import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-replace-lodash',
  description: 'Replacing the import of lodash with lodash-es is more beneficial to tree-shaking',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'lodash',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mingtianyihou33/vite-plugin-replace-lodash',
    npm: 'https://www.npmjs.com/package/vite-plugin-replace-lodash',
  },
  stats: {
    downloads: {
      monthly: 147,
      weekly: 58,
    },
  },
})
