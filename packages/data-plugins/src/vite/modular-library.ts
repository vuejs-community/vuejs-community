import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'modular-library',
  description: 'Plugins for Vite, Rollup, and Rolldown to build modular multi-entry TypeScript libraries.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'modular-library',
    'vite-plugin',
    'rollup-plugin',
    'rolldown-plugin',
    'multi-entry',
    'multi-input',
    'tree-shaking',
    'typescript',
    'bundler',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alfredosalzillo/modular-library',
    npm: 'https://www.npmjs.com/package/modular-library',
  },
  stats: {
    downloads: {
      monthly: 106,
      weekly: 37,
    },
  },
})
