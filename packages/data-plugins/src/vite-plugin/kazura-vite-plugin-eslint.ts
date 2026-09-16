import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kazura/vite-plugin-eslint',
  description: 'ESLint plugin for vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'eslint',
    'vite-plugin',
  ],
  source: {
    github: 'kazura233/kazurajs',
    npm: '@kazura/vite-plugin-eslint',
  },
  links: {
    github: 'https://github.com/kazura233/kazurajs',
    npm: 'https://www.npmjs.com/package/@kazura/vite-plugin-eslint',
    website: 'https://github.com/kazura233/kazurajs/tree/master/packages/vite-plugin-eslint#readme',
  },
  stats: {
    stars: 137,
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
