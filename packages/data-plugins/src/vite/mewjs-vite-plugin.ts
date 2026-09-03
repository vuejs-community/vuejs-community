import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mewjs/vite-plugin',
  description: 'Mew plugin for vite.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'mew',
    'eslint',
    'stylelint',
    'htmlint',
    'markdownlint',
    'lint',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mewjs/mew',
    npm: 'https://www.npmjs.com/package/@mewjs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 10,
    },
  },
})
