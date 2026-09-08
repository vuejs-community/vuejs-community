import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-import-styles',
  description: 'Auto import css/sass/less for your code',
  icon: 'logos:vite-icon',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'auto-import',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Asaki-M/vite-plugin-auto-import-styles',
    npm: 'vite-plugin-auto-import-styles',
  },
  links: {
    github: 'https://github.com/Asaki-M/vite-plugin-auto-import-styles',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-import-styles',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
