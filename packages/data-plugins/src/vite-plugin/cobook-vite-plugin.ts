import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cobook/vite-plugin',
  description: '',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'CoBook',
    'vite-plugin',
  ],
  source: {
    github: 'yjl9903/CoBook',
    npm: '@cobook/vite-plugin',
  },
  links: {
    github: 'https://github.com/yjl9903/CoBook',
    npm: 'https://www.npmjs.com/package/@cobook/vite-plugin',
    website: 'https://github.com/yjl9903/CoBook#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
