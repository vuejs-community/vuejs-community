import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-router-routepathgen',
  description: 'Generate route file paths based on route module names for React Router apps',
  version: '0.1.0-alpha.1',
  category: 'plugin',
  tags: [
    'react-router',
    'route path generator',
    'cli',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/agionoja/react-router-routepathgen',
    npm: 'https://www.npmjs.com/package/react-router-routepathgen',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
