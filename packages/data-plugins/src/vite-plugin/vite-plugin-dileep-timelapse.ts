import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dileep-timelapse',
  description: 'Export a Canvas image at each file save. Use it with Ssam or any HTML Canvas',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dileep',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-dileep-timelapse',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-dileep-timelapse',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
