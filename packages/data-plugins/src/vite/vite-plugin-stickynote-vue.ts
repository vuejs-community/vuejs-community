import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-plugin-stickynote/vue',
  description: 'In-app comment overlay for Vue dev environments — pin coordinates, threads, and replies, persisted via a Cloudflare Worker + D1.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'annotation',
    'comments',
    'feedback',
    'overlay',
    'qa',
    'review',
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/FujishigeTemma/vite-plugin-stickynote',
    npm: 'https://www.npmjs.com/package/@vite-plugin-stickynote/vue',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
