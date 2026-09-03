import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rolldown/plugin-jsx-remove-attributes',
  description: 'Rolldown plugin to remove JSX attributes (e.g. data-testid)',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'data-testid',
    'react',
    'rolldown',
    'rolldown-plugin',
    'testing',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/rolldown/plugins',
    npm: 'https://www.npmjs.com/package/@rolldown/plugin-jsx-remove-attributes',
  },
  stats: {
    downloads: {
      monthly: 4443,
      weekly: 1287,
    },
  },
})
