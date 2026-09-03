import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'salesive-dev-tools',
  description: 'Salesive development tools — Vite plugin, React hooks, and the App Bridge for embedded Salesive apps',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react-hooks',
    'salesive',
    'salesive-app',
    'app-bridge',
    'permissions',
    'configuration',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Eoion/salesive-dev-tools',
    npm: 'https://www.npmjs.com/package/salesive-dev-tools',
  },
  stats: {
    downloads: {
      monthly: 201,
      weekly: 24,
    },
  },
})
