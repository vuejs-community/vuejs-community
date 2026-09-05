import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-worker',
  description: 'Vite plugin to support React Fast Refresh in web worker context.',
  version: '0.5.13',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'fast-refresh',
    'webworker',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tobiasmelen/vite-plugin-react-worker',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-worker',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
