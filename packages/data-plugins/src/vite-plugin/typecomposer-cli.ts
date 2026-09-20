import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'typecomposer-cli',
  description: 'TypeComposer CLI tool',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'framework',
  ],
  links: {
    github: 'https://github.com/zico15/typecomposer-cli',
    npm: 'https://www.npmjs.com/package/typecomposer-cli',
    website: 'https://github.com/zico15/typecomposer-cli#readme',
  },
  source: {
    github: 'zico15/typecomposer-cli',
    npm: 'typecomposer-cli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
