import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vheemstra/vite-plugin-imagemin',
  description: 'A vite plugin for compressing image assets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'minify',
    'compress',
    'jpg',
    'png',
    'gif',
    'svg',
    'webp',
    'avif',
  ],
  source: {
    github: 'vheemstra/vite-plugin-imagemin',
    npm: '@vheemstra/vite-plugin-imagemin',
  },
  links: {
    github: 'https://github.com/vheemstra/vite-plugin-imagemin',
    npm: 'https://www.npmjs.com/package/@vheemstra/vite-plugin-imagemin',
    website: 'https://github.com/vheemstra/vite-plugin-imagemin#readme',
  },
  stats: {
    stars: 37,
    downloads: {
      monthly: 5886,
      weekly: 1342,
    },
  },
})
