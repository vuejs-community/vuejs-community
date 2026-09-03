import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'enhanced-video-sveltekit',
  description: 'Build-time video optimization for SvelteKit. AV1 + H.264 output, auto-extracted poster, lazy loading, on-disk cache.',
  version: '0.9.1',
  category: 'plugin',
  tags: [
    'svelte',
    'sveltekit',
    'video',
    'ffmpeg',
    'av1',
    'h264',
    'webm',
    'vite-plugin',
    'preprocessor',
    'lazy',
    'transcoding',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/voadk/enhanced-video-sveltekit',
    npm: 'https://www.npmjs.com/package/enhanced-video-sveltekit',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 6,
    },
  },
})
