import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-plugin-stickynote/vue',
  description: 'In-app comment overlay for Vue dev environments — pin coordinates, threads, and replies, persisted via a Cloudflare Worker + D1.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'FujishigeTemma/vite-plugin-stickynote',
    npm: '@vite-plugin-stickynote/vue',
  },
  links: {
    github: 'https://github.com/FujishigeTemma/vite-plugin-stickynote',
    npm: 'https://www.npmjs.com/package/@vite-plugin-stickynote/vue',
    website: 'https://github.com/FujishigeTemma/vite-plugin-stickynote#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 8,
    },
  },
})
