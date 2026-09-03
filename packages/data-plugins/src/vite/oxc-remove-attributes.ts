import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'oxc-remove-attributes',
  description: 'Vite/Rolldown plugin that strips JSX attributes (e.g. data-testid) from production builds using oxc + magic-string. Drop-in replacement for @swc/plugin-react-remove-properties on Vite 8 / @vitejs/plugin-react (oxc).',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'data-testid',
    'jsx',
    'oxc',
    'production',
    'react',
    'remove-attributes',
    'rolldown',
    'rolldown-plugin',
    'strip-attributes',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/0x31/oxc-remove-attributes',
    npm: 'https://www.npmjs.com/package/oxc-remove-attributes',
  },
  stats: {
    downloads: {
      monthly: 1853,
      weekly: 496,
    },
  },
})
