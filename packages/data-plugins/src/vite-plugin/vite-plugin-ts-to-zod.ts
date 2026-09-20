import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ts-to-zod',
  description: 'Vite plugin to transform typescript types to zod schemas',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zod',
  ],
  links: {
    github: 'https://github.com/gzzhanghao/vite-plugin-ts-to-zod',
    npm: 'https://www.npmjs.com/package/vite-plugin-ts-to-zod',
    website: 'https://github.com/gzzhanghao/vite-plugin-ts-to-zod#readme',
  },
  source: {
    github: 'gzzhanghao/vite-plugin-ts-to-zod',
    npm: 'vite-plugin-ts-to-zod',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
