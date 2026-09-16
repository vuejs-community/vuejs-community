import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@samrey/cli',
  description: 'Command-line tool, Vite plugin integration, and static security/a11y auditor for Samrey applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'samrey',
    'cli',
    'vite-plugin',
    'bundler',
    'auditor',
  ],
  source: {
    github: 'samrey-framework/samrey',
    npm: '@samrey/cli',
  },
  links: {
    github: 'https://github.com/samrey-framework/samrey',
    npm: 'https://www.npmjs.com/package/@samrey/cli',
    website: 'https://samrey.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 329,
      weekly: 5,
    },
  },
})
