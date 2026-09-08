import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssam-ffmpeg',
  description: 'Ffmpeg plugin for Ssam',
  icon: 'logos:vite-icon',
  version: '0.2.5',
  category: 'plugin',
  tags: [
    'ffmpeg',
    'ssam',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'cdaein/vite-plugin-ssam-ffmpeg',
    npm: 'vite-plugin-ssam-ffmpeg',
  },
  links: {
    github: 'https://github.com/cdaein/vite-plugin-ssam-ffmpeg',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssam-ffmpeg',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 13,
    },
  },
})
