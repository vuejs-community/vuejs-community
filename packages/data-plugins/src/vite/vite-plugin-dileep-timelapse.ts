import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dileep-timelapse',
  description: 'Export a Canvas image at each file save. Use it with Ssam or any HTML Canvas',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'dileep',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-dileep-timelapse',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-dileep-timelapse',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
