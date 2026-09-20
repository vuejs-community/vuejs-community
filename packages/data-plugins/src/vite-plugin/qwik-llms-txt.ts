import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'qwik-llms-txt',
  description: 'Vite plugin for Qwik City that auto-generates llms.txt and llms-full.txt from SSG pages',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'qwik',
    'vite-plugin',
    'llms-txt',
    'seo',
    'ai',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/qwik-llms-txt',
  },
  source: {
    npm: 'qwik-llms-txt',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1022,
      weekly: 125,
    },
  },
})
