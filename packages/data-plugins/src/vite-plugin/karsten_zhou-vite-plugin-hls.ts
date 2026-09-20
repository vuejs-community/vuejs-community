import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@karsten_zhou/vite-plugin-hls',
  description: 'Transcode video files to HLS (HTTP Live Streaming) at Vite build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hls',
    'ffmpeg',
    'video',
    'streaming',
    'adaptive-bitrate',
  ],
  links: {
    github: 'https://github.com/Karsten-Zhou/vite-plugin-hls',
    npm: 'https://www.npmjs.com/package/@karsten_zhou/vite-plugin-hls',
    website: 'https://github.com/Karsten-Zhou/vite-plugin-hls#readme',
  },
  source: {
    github: 'Karsten-Zhou/vite-plugin-hls',
    npm: '@karsten_zhou/vite-plugin-hls',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 903,
      weekly: 903,
    },
  },
})
