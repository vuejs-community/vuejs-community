import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@janustack/vite-config-paths',
  description: 'Give Vite the ability to resolve imports using TypeScript\'s path mapping.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'alias',
    'paths',
    'plugin',
    'resolve',
    'resolver',
    'tsconfig',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/janustack/vite-config-paths',
    npm: 'https://www.npmjs.com/package/@janustack/vite-config-paths',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 8,
    },
  },
})
