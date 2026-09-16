import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rolldown/plugin-jsx-remove-attributes',
  description: 'Rolldown plugin to remove JSX attributes (e.g. data-testid)',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'data-testid',
    'react',
    'rolldown',
    'rolldown-plugin',
    'testing',
  ],
  source: {
    github: 'rolldown/plugins',
    npm: '@rolldown/plugin-jsx-remove-attributes',
  },
  links: {
    github: 'https://github.com/rolldown/plugins',
    npm: 'https://www.npmjs.com/package/@rolldown/plugin-jsx-remove-attributes',
    website: 'https://github.com/rolldown/plugins/tree/main/packages/jsx-remove-attributes#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5055,
      weekly: 993,
    },
  },
})
