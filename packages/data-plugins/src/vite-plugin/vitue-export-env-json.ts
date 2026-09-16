import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitue/export-env-json',
  description: 'After building, automatically export the json file of the client-side available properties in .env',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vitue',
    'workplusfe',
    'export-env-json',
  ],
  source: {
    github: 'WorkPlusFE/vite-plugin-export-env-json',
    npm: '@vitue/export-env-json',
  },
  links: {
    github: 'https://github.com/WorkPlusFE/vite-plugin-export-env-json',
    npm: 'https://www.npmjs.com/package/@vitue/export-env-json',
    website: 'https://github.com/WorkPlusFE/vite-plugin-export-env-json#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 8,
    },
  },
})
