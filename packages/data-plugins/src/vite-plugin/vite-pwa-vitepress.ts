import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-pwa/vitepress',
  description: 'Zero-config PWA for VitePress',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'workbox',
    'pwa',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vite-pwa/vitepress',
    npm: '@vite-pwa/vitepress',
  },
  links: {
    github: 'https://github.com/vite-pwa/vitepress',
    npm: 'https://www.npmjs.com/package/@vite-pwa/vitepress',
    website: 'https://github.com/vite-pwa/vitepress#readme',
  },
  stats: {
    stars: 50,
    downloads: {
      monthly: 61933,
      weekly: 9005,
    },
  },
})
