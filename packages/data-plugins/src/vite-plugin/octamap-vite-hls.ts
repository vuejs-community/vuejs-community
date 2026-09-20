import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@octamap/vite-hls',
  description: 'Making it super easy to use HLS video streaming instead of .mov, .mp4 and other slow video formats ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'compiler',
    'hls',
    'video-streaming',
    'stream video',
  ],
  links: {
    github: 'https://github.com/octamap/vite-hls',
    npm: 'https://www.npmjs.com/package/@octamap/vite-hls',
    website: 'https://github.com/octamap/vite-hls#readme',
  },
  source: {
    github: 'octamap/vite-hls',
    npm: '@octamap/vite-hls',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
