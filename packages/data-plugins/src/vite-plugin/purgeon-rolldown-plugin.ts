import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@purgeon/rolldown-plugin',
  description: 'Rolldown/Vite plugin that cross-references JSX usage against CSS graphs and purges unused rules from emitted CSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'purge',
    'rolldown-plugin',
    'tree-shaking',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/knst0/purgeon',
    npm: 'https://www.npmjs.com/package/@purgeon/rolldown-plugin',
  },
  source: {
    github: 'knst0/purgeon',
    npm: '@purgeon/rolldown-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 4,
    },
  },
})
