import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zessjs/vite-plugin',
  description: 'Vite plugin for Zess 🧩 JSX file parser and transformer for building modern web applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite plugin',
    'vitejs',
    'vitejs plugin',
    'vite-plugin',
    'zess',
  ],
  source: {
    github: 'rpsffx/zess',
    npm: '@zessjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/rpsffx/zess',
    npm: 'https://www.npmjs.com/package/@zessjs/vite-plugin',
    website: 'https://github.com/rpsffx/zess/tree/main/packages/plugin#readme',
  },
  stats: {
    stars: 29,
    downloads: {
      monthly: 29,
      weekly: 5,
    },
  },
})
