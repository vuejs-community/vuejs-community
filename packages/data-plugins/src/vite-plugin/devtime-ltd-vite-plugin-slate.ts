import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devtime-ltd/vite-plugin-slate',
  description: 'Vite plugin that wires the dev server to slate\'s HTTPS proxy.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'slate',
    'laravel',
    'https',
    'proxy',
    'hmr',
  ],
  source: {
    github: 'devtime-ltd/slate',
    npm: '@devtime-ltd/vite-plugin-slate',
  },
  links: {
    github: 'https://github.com/devtime-ltd/slate',
    npm: 'https://www.npmjs.com/package/@devtime-ltd/vite-plugin-slate',
    website: 'https://github.com/devtime-ltd/slate/tree/main/vite-plugin-slate#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 189,
      weekly: 27,
    },
  },
})
