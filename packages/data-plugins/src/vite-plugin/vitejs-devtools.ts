import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/devtools',
  description: 'Vite DevTools',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
    'rpc',
  ],
  source: {
    github: 'vitejs/devtools',
    npm: '@vitejs/devtools',
  },
  links: {
    github: 'https://github.com/vitejs/devtools',
    npm: 'https://www.npmjs.com/package/@vitejs/devtools',
    website: 'https://github.com/vitejs/devtools#readme',
  },
  stats: {
    stars: 1193,
    downloads: {
      monthly: 705850,
      weekly: 128863,
    },
  },
})
