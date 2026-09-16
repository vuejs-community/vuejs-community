import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'modular-library',
  description: 'Plugins for Vite, Rollup, and Rolldown to build modular multi-entry TypeScript libraries.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'alfredosalzillo/modular-library',
    npm: 'modular-library',
  },
  links: {
    github: 'https://github.com/alfredosalzillo/modular-library',
    npm: 'https://www.npmjs.com/package/modular-library',
    website: 'https://github.com/alfredosalzillo/modular-library#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 65,
      weekly: 8,
    },
  },
})
