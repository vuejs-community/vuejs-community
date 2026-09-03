import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tanc00/vite-plugin-sfc-reload',
  description: 'Trigger a HMR update on CSS or JS changes or a full page reload when templates are modified',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'vitejs',
    'sfc',
    'reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tanc/vite-plugin-sfc-reload',
    npm: 'https://www.npmjs.com/package/@tanc00/vite-plugin-sfc-reload',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
