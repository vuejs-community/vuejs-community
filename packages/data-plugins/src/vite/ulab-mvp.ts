import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ulab/mvp',
  description: 'A set of macro plugins for React projects based on Vite.',
  version: '0.0.20',
  category: 'plugin',
  tags: [
    'macro',
    'vite',
    'plugin',
    'vite-plugin',
    'router',
    'menu',
    'i18n',
    'react',
    'react-i18next',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/unbyte/mvp',
    npm: 'https://www.npmjs.com/package/@ulab/mvp',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 15,
    },
  },
})
