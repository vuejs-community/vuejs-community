import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-optimize-videos',
  description: 'Plugin Vite para otimizar vídeos mantendo o formato de entrada (mp4, webm, mov, avi)',
  icon: 'logos:vite-icon',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'video',
    'optimization',
    'ffmpeg',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jaaymes/vite-plugin-optimize-videos',
    npm: 'vite-plugin-optimize-videos',
  },
  links: {
    github: 'https://github.com/jaaymes/vite-plugin-optimize-videos',
    npm: 'https://www.npmjs.com/package/vite-plugin-optimize-videos',
  },
  stats: {
    downloads: {
      monthly: 188,
      weekly: 33,
    },
  },
})
