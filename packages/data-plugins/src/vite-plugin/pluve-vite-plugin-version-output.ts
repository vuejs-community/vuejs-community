import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pluve/vite-plugin-version-output',
  description: 'The version output plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    '@pluve/vite-plugin-version-output',
  ],
  source: {
    npm: '@pluve/vite-plugin-version-output',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@pluve/vite-plugin-version-output',
    website: 'https://gitlab.pharmacyyf.com/frontend-common/vite-plugin-version-output',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 62,
      weekly: 5,
    },
  },
})
