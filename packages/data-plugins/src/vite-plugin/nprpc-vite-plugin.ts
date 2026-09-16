import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nprpc/vite-plugin',
  description: 'Vite plugin for NPRPC — notifies the C++ backend to reload SSR and host.json after each build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nprpc',
    'ssr',
    'sveltekit',
    'dev',
  ],
  source: {
    github: 'nikitapn/nprpc',
    npm: '@nprpc/vite-plugin',
  },
  links: {
    github: 'https://github.com/nikitapn/nprpc',
    npm: 'https://www.npmjs.com/package/@nprpc/vite-plugin',
    website: 'https://github.com/nikitapn/nprpc#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
