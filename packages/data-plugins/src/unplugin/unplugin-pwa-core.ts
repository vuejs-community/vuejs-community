import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unplugin-pwa/core',
  description: 'PWA bundler-agnostic core logic and utilities',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'pwa',
    'core',
    'workbox',
    'service-worker',
    'web-manifest',
    'agnostic',
    'configuration',
    'helpers',
  ],
  links: {
    github: 'https://github.com/vite-pwa/unplugin-pwa',
    npm: 'https://www.npmjs.com/package/@unplugin-pwa/core',
    website: 'https://github.com/vite-pwa/unplugin-pwa#readme',
  },
  source: {
    github: 'vite-pwa/unplugin-pwa',
    npm: '@unplugin-pwa/core',
  },
})
