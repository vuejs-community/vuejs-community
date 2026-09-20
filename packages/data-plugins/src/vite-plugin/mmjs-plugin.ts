import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mmjs-plugin',
  description: 'mmjs-plugin vite-plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mmjs-plugin',
    'vite-plugin',
    'plugin',
  ],
  links: {
    github: 'https://github.com/mmj8000/mmjs-core',
    npm: 'https://www.npmjs.com/package/mmjs-plugin',
    website: 'https://github.com/mmj8000/mmjs-core/tree/dev/packages/mmjs-plugin',
  },
  source: {
    github: 'mmj8000/mmjs-core',
    npm: 'mmjs-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 83,
      weekly: 4,
    },
  },
})
