import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-pwa-plugin',
  description: 'Zero-config PWA for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'pwa',
    'vue',
    'vitepress',
    'preact',
    'svelte',
    'sveltekit',
    'workbox',
    'solidjs',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vite-pwa/vite-plugin-pwa',
    npm: 'vite-pwa-plugin',
  },
  links: {
    github: 'https://github.com/vite-pwa/vite-plugin-pwa',
    npm: 'https://www.npmjs.com/package/vite-pwa-plugin',
    website: 'https://github.com/vite-pwa/vite-plugin-pwa#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
