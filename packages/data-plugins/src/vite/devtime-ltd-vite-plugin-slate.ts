import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@devtime-ltd/vite-plugin-slate',
  description: 'Vite plugin that wires the dev server to slate\'s HTTPS proxy.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'slate',
    'laravel',
    'https',
    'proxy',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/devtime-ltd/slate',
    npm: 'https://www.npmjs.com/package/@devtime-ltd/vite-plugin-slate',
  },
  stats: {
    downloads: {
      monthly: 182,
      weekly: 23,
    },
  },
})
