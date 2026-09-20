import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-define-dts',
  description: 'Automatically generate corresponding type definitions based on define option in the Vite configuration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'dts',
    'types',
    'typed',
    'define',
    'define-dts',
    'define-types',
    'constants',
    'generate',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-define-dts',
    website: 'https://github.com/eogic/vite-plugin-define-dts',
  },
  source: {
    npm: 'vite-plugin-define-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
