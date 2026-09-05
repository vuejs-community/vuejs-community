import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-component-source',
  description: 'A Vite plugin that adds source file location (path:line:column) as data-component attributes to React JSX elements for easier debugging',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'jsx',
    'debugging',
    'component',
    'source-map',
    'developer-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-component-source',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
