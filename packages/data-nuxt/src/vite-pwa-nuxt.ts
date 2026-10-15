import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-pwa-nuxt',
  description: 'Zero-config PWA plugin',
  icon: 'icon:vite-pwa-nuxt',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vite-pwa/nuxt',
    npm: 'https://npmjs.com/package/@vite-pwa/nuxt',
    website: 'https://github.com/vite-pwa/nuxt',
  },
  source: {
    github: 'vite-pwa/nuxt',
    npm: '@vite-pwa/nuxt',
  },
})
