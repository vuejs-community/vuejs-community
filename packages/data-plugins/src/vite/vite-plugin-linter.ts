import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-linter',
  description: 'Plugin for linting files with Vite',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'eslint',
    'typescript',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/unimorphic/vite-plugin-linter',
    npm: 'https://www.npmjs.com/package/vite-plugin-linter',
  },
  stats: {
    downloads: {
      monthly: 66114,
      weekly: 18786,
    },
  },
})
