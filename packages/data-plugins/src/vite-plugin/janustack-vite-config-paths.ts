import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@janustack/vite-config-paths',
  description: 'Give Vite the ability to resolve imports using TypeScript\'s path mapping.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/janustack/vite-config-paths',
    npm: 'https://www.npmjs.com/package/@janustack/vite-config-paths',
    website: 'https://github.com/janustack/vite-config-paths/#readme',
  },
  source: {
    github: 'janustack/vite-config-paths',
    npm: '@janustack/vite-config-paths',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
