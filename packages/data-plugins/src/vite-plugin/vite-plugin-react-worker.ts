import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-worker',
  description: 'Vite plugin to support React Fast Refresh in web worker context.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'fast-refresh',
    'webworker',
  ],
  links: {
    github: 'https://github.com/tobiasmelen/vite-plugin-react-worker',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-worker',
    website: 'https://github.com/tobiasmelen/vite-plugin-react-worker#readme',
  },
  source: {
    github: 'tobiasmelen/vite-plugin-react-worker',
    npm: 'vite-plugin-react-worker',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
