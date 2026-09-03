import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'html-auto-reload',
  description: 'Automatically detect HTML resource updates and prompt user to refresh the page. Support both Vite and Webpack.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'html',
    'auto-reload',
    'vite-plugin',
    'webpack-plugin',
    'hot-reload',
    'resource-update',
    'frontend',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dufan3715/html-auto-reload',
    npm: 'https://www.npmjs.com/package/html-auto-reload',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
