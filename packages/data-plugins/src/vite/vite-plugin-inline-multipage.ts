import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inline-multipage',
  description: 'A Vite plugin that inlines multi-paged applications (like in svelte) to multiple html files',
  icon: 'logos:vite-icon',
  version: '1.0.20',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'inline',
    'optimization',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'SpiderUnderUrBed/vite-plugin-multipage-inline',
    npm: 'vite-plugin-inline-multipage',
  },
  links: {
    github: 'https://github.com/SpiderUnderUrBed/vite-plugin-multipage-inline',
    npm: 'https://www.npmjs.com/package/vite-plugin-inline-multipage',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 3,
    },
  },
})
