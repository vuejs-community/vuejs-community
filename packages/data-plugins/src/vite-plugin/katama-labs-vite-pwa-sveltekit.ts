import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@katama-labs/vite-pwa-sveltekit',
  description: 'Zero-config PWA for SvelteKit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sveltekit',
    'workbox',
    'pwa',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vite-pwa/sveltekit',
    npm: 'https://www.npmjs.com/package/@katama-labs/vite-pwa-sveltekit',
    website: 'https://github.com/vite-pwa/sveltekit#readme',
  },
  source: {
    github: 'vite-pwa/sveltekit',
    npm: '@katama-labs/vite-pwa-sveltekit',
  },
})
