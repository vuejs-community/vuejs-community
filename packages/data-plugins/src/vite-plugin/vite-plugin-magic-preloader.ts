import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-magic-preloader',
  description: 'A Vite plugin for preloading and prefetching',
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
  ],
  source: {
    github: 'rzzf/vite-plugin-magic-preloader',
    npm: 'vite-plugin-magic-preloader',
  },
  links: {
    github: 'https://github.com/rzzf/vite-plugin-magic-preloader',
    npm: 'https://www.npmjs.com/package/vite-plugin-magic-preloader',
    website: 'https://github.com/rzzf/vite-plugin-magic-preloader/tree/main/#readme',
  },
  stats: {
    stars: 42,
    downloads: {
      monthly: 7006,
      weekly: 1132,
    },
  },
})
