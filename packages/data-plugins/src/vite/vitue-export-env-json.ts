import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vitue/export-env-json',
  description: 'After building, automatically export the json file of the client-side available properties in .env',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vitue',
    'workplusfe',
    'export-env-json',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/WorkPlusFE/vite-plugin-export-env-json',
    npm: 'https://www.npmjs.com/package/@vitue/export-env-json',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 7,
    },
  },
})
