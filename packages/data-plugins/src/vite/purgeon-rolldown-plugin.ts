import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@purgeon/rolldown-plugin',
  description: 'Rolldown/Vite plugin that cross-references JSX usage against CSS graphs and purges unused rules from emitted CSS',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'css',
    'purge',
    'rolldown-plugin',
    'tree-shaking',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/knst0/purgeon',
    npm: 'https://www.npmjs.com/package/@purgeon/rolldown-plugin',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 10,
    },
  },
})
