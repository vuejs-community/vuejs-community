import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inline-multipage',
  description: 'A Vite plugin that inlines multi-paged applications (like in svelte) to multiple html files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'inline',
    'optimization',
  ],
  source: {
    github: 'SpiderUnderUrBed/vite-plugin-multipage-inline',
    npm: 'vite-plugin-inline-multipage',
  },
  links: {
    github: 'https://github.com/SpiderUnderUrBed/vite-plugin-multipage-inline',
    npm: 'https://www.npmjs.com/package/vite-plugin-inline-multipage',
    website: 'https://github.com/SpiderUnderUrBed/vite-plugin-multipage-inline#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
