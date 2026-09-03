import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-define-dts',
  description: 'Automatically generate corresponding type definitions based on define option in the Vite configuration.',
  version: '0.0.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-define-dts',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
