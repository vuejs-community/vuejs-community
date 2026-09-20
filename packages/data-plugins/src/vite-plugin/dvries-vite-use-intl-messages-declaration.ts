import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dvries/vite-use-intl-messages-declaration',
  description: 'Generate next-intl/use-intl message declaration files from JSON messages in Vite projects.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'next-intl',
    'use-intl',
    'i18n',
    'typescript',
  ],
  links: {
    github: 'https://github.com/vetledv/vite-use-intl-messages-declaration',
    npm: 'https://www.npmjs.com/package/@dvries/vite-use-intl-messages-declaration',
    website: 'https://github.com/vetledv/vite-use-intl-messages-declaration#readme',
  },
  source: {
    github: 'vetledv/vite-use-intl-messages-declaration',
    npm: '@dvries/vite-use-intl-messages-declaration',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 47,
      weekly: 1,
    },
  },
})
