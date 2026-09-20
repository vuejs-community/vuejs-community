import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@react-surgeon/vite-plugin',
  description: 'Development-only Vite plugin that maps clicked DOM elements back to JSX source for React Surgeon.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react-surgeon',
    'vite-plugin',
    'vite',
    'react',
    'jsx',
    'devtools',
    'source-mapping',
  ],
  links: {
    github: 'https://github.com/waleedmustafa971/React-surgeon',
    npm: 'https://www.npmjs.com/package/@react-surgeon/vite-plugin',
    website: 'https://github.com/waleedmustafa971/React-surgeon#readme',
  },
  source: {
    github: 'waleedmustafa971/React-surgeon',
    npm: '@react-surgeon/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 26,
    },
  },
})
