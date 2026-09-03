import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@octamap/vite-hls',
  description: 'Making it super easy to use HLS video streaming instead of .mov, .mp4 and other slow video formats ',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'compiler',
    'hls',
    'video-streaming',
    'stream video',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/octamap/vite-hls',
    npm: 'https://www.npmjs.com/package/@octamap/vite-hls',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 9,
    },
  },
})
