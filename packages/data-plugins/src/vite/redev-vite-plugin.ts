import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'redev-vite-plugin',
  description: 'Vite plugin that injects data-redev-* attributes so DOM clicks map back to source files. Powers redev-cli.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'redev',
    'developer-tools',
    'click-to-edit',
    'react',
    'jsx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/abhishek4544/Redev',
    npm: 'https://www.npmjs.com/package/redev-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 296,
      weekly: 3,
    },
  },
})
