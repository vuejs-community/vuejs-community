import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssam-timelapse',
  description: 'Export a Canvas image at each file save. Use it with Ssam or any HTML Canvas',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ssam',
    'vite-plugin',
  ],
  source: {
    github: 'cdaein/vite-plugin-ssam-timelapse',
    npm: 'vite-plugin-ssam-timelapse',
  },
  links: {
    github: 'https://github.com/cdaein/vite-plugin-ssam-timelapse',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssam-timelapse',
    website: 'https://github.com/cdaein/vite-plugin-ssam-timelapse#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
