import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@better-i18n/vite',
  description: 'Vite plugin for Better i18n — SSR translation injection, zero FOUC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'localization',
    'vite',
    'vite-plugin',
    'ssr',
    'better-i18n',
  ],
  links: {
    github: 'https://github.com/better-i18n/better-i18n',
    npm: 'https://www.npmjs.com/package/@better-i18n/vite',
    website: 'https://github.com/better-i18n/better-i18n/tree/main/packages/vite',
  },
  source: {
    github: 'better-i18n/better-i18n',
    npm: '@better-i18n/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 537,
      weekly: 85,
    },
  },
})
