import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'oxc-remove-attributes',
  description: 'Vite/Rolldown plugin that strips JSX attributes (e.g. data-testid) from production builds using oxc + magic-string. Drop-in replacement for @swc/plugin-react-remove-properties on Vite 8 / @vitejs/plugin-react (oxc).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: '0x31/oxc-remove-attributes',
    npm: 'oxc-remove-attributes',
  },
  links: {
    github: 'https://github.com/0x31/oxc-remove-attributes',
    npm: 'https://www.npmjs.com/package/oxc-remove-attributes',
    website: 'https://github.com/0x31/oxc-remove-attributes#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1914,
      weekly: 493,
    },
  },
})
