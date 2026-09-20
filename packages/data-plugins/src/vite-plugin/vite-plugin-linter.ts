import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-linter',
  description: 'Plugin for linting files with Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'eslint',
    'typescript',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/unimorphic/vite-plugin-linter',
    npm: 'https://www.npmjs.com/package/vite-plugin-linter',
    website: 'https://github.com/unimorphic/vite-plugin-linter',
  },
  source: {
    github: 'unimorphic/vite-plugin-linter',
    npm: 'vite-plugin-linter',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 63623,
      weekly: 10298,
    },
  },
})
