import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@react-code-finder/vite',
  description: 'Vite plugin for react-code-finder - Inspect React components and copy source locations',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'react',
    'vite',
    'vite-plugin',
    'devtools',
    'inspector',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Jonghakseo/react-code-finder',
    npm: 'https://www.npmjs.com/package/@react-code-finder/vite',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 6,
    },
  },
})
