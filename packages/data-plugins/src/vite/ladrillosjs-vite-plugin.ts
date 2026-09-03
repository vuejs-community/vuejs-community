import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ladrillosjs/vite-plugin',
  description: 'Precompiles LadrillosJS components at build time so the page never needs script-src \'unsafe-eval\'.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ladrillosjs',
    'web-components',
    'csp',
    'unsafe-eval',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drubiodev/LadrillosJS',
    npm: 'https://www.npmjs.com/package/@ladrillosjs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 108,
      weekly: 14,
    },
  },
})
