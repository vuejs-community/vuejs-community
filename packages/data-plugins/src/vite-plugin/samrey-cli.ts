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
  links: {
    github: 'https://github.com/vis6ky/Samrey',
    npm: 'https://www.npmjs.com/package/@samrey/cli',
    website: 'https://github.com/vis6ky/Samrey#readme',
  },
  source: {
    github: 'vis6ky/Samrey',
    npm: '@samrey/cli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 329,
      weekly: 5,
    },
  },
})
