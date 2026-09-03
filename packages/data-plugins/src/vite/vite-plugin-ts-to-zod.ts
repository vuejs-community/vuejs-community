import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ts-to-zod',
  description: 'Vite plugin to transform typescript types to zod schemas',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'zod',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gzzhanghao/vite-plugin-ts-to-zod',
    npm: 'https://www.npmjs.com/package/vite-plugin-ts-to-zod',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
