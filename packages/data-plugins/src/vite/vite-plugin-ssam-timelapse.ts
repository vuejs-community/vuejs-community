import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssam-timelapse',
  description: 'Export a Canvas image at each file save. Use it with Ssam or any HTML Canvas',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'ssam',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cdaein/vite-plugin-ssam-timelapse',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssam-timelapse',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
