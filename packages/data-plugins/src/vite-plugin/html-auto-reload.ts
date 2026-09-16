import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'html-auto-reload',
  description: 'Automatically detect HTML resource updates and prompt user to refresh the page. Support both Vite and Webpack.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'html',
    'auto-reload',
    'vite-plugin',
    'webpack-plugin',
    'hot-reload',
    'resource-update',
    'frontend',
  ],
  source: {
    github: 'dufan3715/html-auto-reload',
    npm: 'html-auto-reload',
  },
  links: {
    github: 'https://github.com/dufan3715/html-auto-reload',
    npm: 'https://www.npmjs.com/package/html-auto-reload',
    website: 'https://github.com/dufan3715/html-auto-reload',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
