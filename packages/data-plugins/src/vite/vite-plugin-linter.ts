import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-linter',
  description: 'Plugin for linting files with Vite',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'unimorphic/vite-plugin-linter',
    npm: 'vite-plugin-linter',
  },
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
