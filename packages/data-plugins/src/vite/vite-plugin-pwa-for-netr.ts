import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pwa-for-netr',
  description: 'Zero-config PWA for Vite',
  icon: 'logos:vite-icon',
  version: '0.12.4',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'antfu/vite-plugin-pwa',
    npm: 'vite-plugin-pwa-for-netr',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-pwa',
    npm: 'https://www.npmjs.com/package/vite-plugin-pwa-for-netr',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
