import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-pwa-nuxt',
  description: 'Zero-config PWA Plugin for Nuxt',
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
  stats: {
    stars: 582,
    downloads: {
      monthly: 558309,
      weekly: 137406,
    },
  },
})
