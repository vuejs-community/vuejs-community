import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@samrey/cli',
  description: 'Command-line tool, Vite plugin integration, and static security/a11y auditor for Samrey applications.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'samrey',
    'cli',
    'vite-plugin',
    'bundler',
    'auditor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/samrey-framework/samrey',
    npm: 'https://www.npmjs.com/package/@samrey/cli',
  },
  stats: {
    downloads: {
      monthly: 297,
      weekly: 297,
    },
  },
})
