import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@comvi/vite-plugin',
  description: 'Vite plugin for Comvi — auto-generates TypeScript types from local translation files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'vite',
    'vite-plugin',
    'typescript',
    'typegen',
    'comvi',
  ],
  links: {
    github: 'https://github.com/comvi-io/comvi-js',
    npm: 'https://www.npmjs.com/package/@comvi/vite-plugin',
    website: 'https://comvi.io',
  },
  source: {
    github: 'comvi-io/comvi-js',
    npm: '@comvi/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 42,
      weekly: 6,
    },
  },
})
