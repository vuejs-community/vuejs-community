import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@quasar/vite-plugin',
  description: 'Vite plugin for Quasar Framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'quasar',
    'vite',
    'vite-plugin',
    'vue',
    'vuejs',
  ],
  links: {
    github: 'https://github.com/quasarframework/quasar',
    npm: 'https://www.npmjs.com/package/@quasar/vite-plugin',
    website: 'https://quasar.dev',
  },
  source: {
    github: 'quasarframework/quasar',
    npm: '@quasar/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1041589,
      weekly: 186403,
    },
  },
})
