import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ssrx/vite',
  description: 'A Vite plugin that improves the DX of developing SSR apps.',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/marbemac/ssrx',
    npm: 'https://www.npmjs.com/package/@ssrx/vite',
  },
  stats: {
    downloads: {
      monthly: 367,
      weekly: 84,
    },
  },
})
