import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preload-chunks',
  description: 'Vite plugin for generating key chunks map for preloading by external projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'preload',
    'prefetch',
    'manifest',
  ],
  links: {
    github: 'https://github.com/Lootjs/preload-chunks-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-preload-chunks',
    website: 'https://github.com/Lootjs/preload-chunks-plugin#readme',
  },
  source: {
    github: 'Lootjs/preload-chunks-plugin',
    npm: 'vite-plugin-preload-chunks',
  },
})
