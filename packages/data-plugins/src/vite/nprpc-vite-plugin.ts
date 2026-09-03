import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nprpc/vite-plugin',
  description: 'Vite plugin for NPRPC — notifies the C++ backend to reload SSR and host.json after each build',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'nprpc',
    'ssr',
    'sveltekit',
    'dev',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nikitapn/nprpc',
    npm: 'https://www.npmjs.com/package/@nprpc/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
