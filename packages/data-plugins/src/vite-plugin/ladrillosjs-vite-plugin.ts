import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ladrillosjs/vite-plugin',
  description: 'Precompiles LadrillosJS components at build time so the page never needs script-src \'unsafe-eval\'.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ladrillosjs',
    'web-components',
    'csp',
    'unsafe-eval',
  ],
  source: {
    github: 'drubiodev/LadrillosJS',
    npm: '@ladrillosjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/drubiodev/LadrillosJS',
    npm: 'https://www.npmjs.com/package/@ladrillosjs/vite-plugin',
    website: 'https://github.com/drubiodev/LadrillosJS#readme',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 44,
      weekly: 3,
    },
  },
})
