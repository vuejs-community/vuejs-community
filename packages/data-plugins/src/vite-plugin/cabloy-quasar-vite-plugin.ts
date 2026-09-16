import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cabloy/quasar-vite-plugin',
  description: 'Vite plugin for Quasar Framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'quasar',
    'vite',
    'vue',
    'vuejs',
  ],
  source: {
    github: 'quasarframework/quasar',
    npm: '@cabloy/quasar-vite-plugin',
  },
  links: {
    github: 'https://github.com/quasarframework/quasar',
    npm: 'https://www.npmjs.com/package/@cabloy/quasar-vite-plugin',
    website: 'https://quasar.dev',
  },
  stats: {
    stars: 27210,
    downloads: {
      monthly: 1572,
      weekly: 299,
    },
  },
})
