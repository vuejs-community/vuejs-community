import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nsis/vite-plugin-nlf',
  description: 'A Vite plugin to load NSIS language files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'nsis',
    'nsis language file',
    'nlf',
  ],
  source: {
    github: 'idleberg/nsis-org',
    npm: '@nsis/vite-plugin-nlf',
  },
  links: {
    github: 'https://github.com/idleberg/nsis-org',
    npm: 'https://www.npmjs.com/package/@nsis/vite-plugin-nlf',
    website: 'https://github.com/idleberg/nsis-org/tree/main/packages/vite-plugin-nlf#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 48,
      weekly: 7,
    },
  },
})
