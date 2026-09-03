import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@w6s/export-env-json',
  description: 'After building, automatically export the json file of the client-side available properties in .env',
  version: '1.0.0-beta.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'workplusfe',
    'export-env-json',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/WorkPlusFE/vite-plugin-export-env-json',
    npm: 'https://www.npmjs.com/package/@w6s/export-env-json',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 10,
    },
  },
})
