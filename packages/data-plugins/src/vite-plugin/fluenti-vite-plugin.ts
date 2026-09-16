import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fluenti/vite-plugin',
  description: 'Vite plugin for Fluenti — build-time transforms, virtual modules, code splitting',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'compile-time',
    'icu',
    'messageformat',
    'vite',
    'vite-plugin',
    'build-time',
    'code-splitting',
  ],
  source: {
    github: 'usefluenti/fluenti',
    npm: '@fluenti/vite-plugin',
  },
  links: {
    github: 'https://github.com/usefluenti/fluenti',
    npm: 'https://www.npmjs.com/package/@fluenti/vite-plugin',
    website: 'https://fluenti.dev',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 33,
      weekly: 8,
    },
  },
})
