import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@w6s/export-env-json',
  description: 'After building, automatically export the json file of the client-side available properties in .env',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'workplusfe',
    'export-env-json',
  ],
  links: {
    github: 'https://github.com/WorkPlusFE/vite-plugin-export-env-json',
    npm: 'https://www.npmjs.com/package/@w6s/export-env-json',
    website: 'https://github.com/WorkPlusFE/vite-plugin-export-env-json#readme',
  },
  source: {
    github: 'WorkPlusFE/vite-plugin-export-env-json',
    npm: '@w6s/export-env-json',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
