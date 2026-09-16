import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yapyak/vite',
  description: 'Vite plugin for yapyak.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'plugin',
    'translation',
    'vite',
    'vite-plugin',
    'yapyak',
  ],
  source: {
    github: 'yapyak/yapyak',
    npm: '@yapyak/vite',
  },
  links: {
    github: 'https://github.com/yapyak/yapyak',
    npm: 'https://www.npmjs.com/package/@yapyak/vite',
    website: 'https://yapyak.dev',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 1399,
      weekly: 82,
    },
  },
})
