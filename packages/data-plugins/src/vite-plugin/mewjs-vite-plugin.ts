import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mewjs/vite-plugin',
  description: 'Mew plugin for vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mew',
    'eslint',
    'stylelint',
    'htmlint',
    'markdownlint',
    'lint',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mewjs/mew',
    npm: 'https://www.npmjs.com/package/@mewjs/vite-plugin',
    website: 'https://github.com/mewjs/mew#readme',
  },
  source: {
    github: 'mewjs/mew',
    npm: '@mewjs/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 6,
    },
  },
})
