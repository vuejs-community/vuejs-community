import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-windmill',
  description: 'Vite plugin and deploy tooling for Windmill raw apps.',
  icon: 'logos:vite-icon',
  version: '1.805.0',
  category: 'plugin',
  tags: [
    'raw-app',
    'spa',
    'vite',
    'vite-plugin',
    'windmill',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jkker/vite-plugin-windmill',
    npm: 'vite-plugin-windmill',
  },
  links: {
    github: 'https://github.com/jkker/vite-plugin-windmill',
    npm: 'https://www.npmjs.com/package/vite-plugin-windmill',
  },
  stats: {
    downloads: {
      monthly: 3431,
      weekly: 678,
    },
  },
})
