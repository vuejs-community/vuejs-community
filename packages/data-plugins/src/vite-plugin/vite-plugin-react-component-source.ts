import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-component-source',
  description: 'A Vite plugin that adds source file location (path:line:column) as data-component attributes to React JSX elements for easier debugging',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-react-component-source',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-react-component-source',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
