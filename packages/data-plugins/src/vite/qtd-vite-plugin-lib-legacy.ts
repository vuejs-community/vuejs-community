import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@qtd/vite-plugin-lib-legacy',
  description: '基于官方 @vitejs/plugin-legacy@6.0.0 根据业务减配而来',
  version: '6.0.0',
  category: 'plugin',
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    '@vitejs/plugin-legacy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitejs/vite',
    npm: 'https://www.npmjs.com/package/@qtd/vite-plugin-lib-legacy',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 7,
    },
  },
})
