import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'enhanced-video-sveltekit',
  description: 'Build-time video optimization for SvelteKit. AV1 + H.264 output, auto-extracted poster, lazy loading, on-disk cache.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/voadk/enhanced-video-sveltekit',
    npm: 'https://www.npmjs.com/package/enhanced-video-sveltekit',
    website: 'https://github.com/voadk/enhanced-video-sveltekit#readme',
  },
  source: {
    github: 'voadk/enhanced-video-sveltekit',
    npm: 'enhanced-video-sveltekit',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 46,
      weekly: 6,
    },
  },
})
