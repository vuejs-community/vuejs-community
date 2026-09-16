import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-optimize-videos',
  description: 'Plugin Vite para otimizar vídeos mantendo o formato de entrada (mp4, webm, mov, avi)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'video',
    'optimization',
    'ffmpeg',
  ],
  source: {
    github: 'jaaymes/vite-plugin-optimize-videos',
    npm: 'vite-plugin-optimize-videos',
  },
  links: {
    github: 'https://github.com/jaaymes/vite-plugin-optimize-videos',
    npm: 'https://www.npmjs.com/package/vite-plugin-optimize-videos',
    website: 'https://github.com/jaaymes/vite-plugin-optimize-videos#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 130,
      weekly: 2,
    },
  },
})
