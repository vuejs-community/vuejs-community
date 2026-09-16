import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-portal-toolkit',
  description: 'Vite 7 plugin + React helper',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'module-federation',
    'remote-config',
    'react',
  ],
  source: {
    npm: 'vite-portal-toolkit',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-portal-toolkit',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
