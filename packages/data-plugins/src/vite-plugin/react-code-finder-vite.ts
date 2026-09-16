import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@react-code-finder/vite',
  description: 'Vite plugin for react-code-finder - Inspect React components and copy source locations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'vite',
    'vite-plugin',
    'devtools',
    'inspector',
  ],
  source: {
    github: 'Jonghakseo/react-code-finder',
    npm: '@react-code-finder/vite',
  },
  links: {
    github: 'https://github.com/Jonghakseo/react-code-finder',
    npm: 'https://www.npmjs.com/package/@react-code-finder/vite',
    website: 'https://github.com/Jonghakseo/react-code-finder#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 1,
    },
  },
})
