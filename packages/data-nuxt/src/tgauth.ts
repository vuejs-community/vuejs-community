import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tgauth',
  description: 'Extremely simple "Login with Telegram" button',
  icon: '',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/paranoidphantom/tgauth',
    npm: 'https://npmjs.com/package/@paranoidphantom/tgauth',
    website: 'https://github.com/paranoidphantom/tgauth',
  },
  source: {
    github: 'paranoidphantom/tgauth',
    npm: '@paranoidphantom/tgauth',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 119,
      weekly: 21,
    },
  },
})
