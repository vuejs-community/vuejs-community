import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@qtd/vite-plugin-lib-legacy',
  description: '基于官方 @vitejs/plugin-legacy@6.0.0 根据业务减配而来',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    '@vitejs/plugin-legacy',
  ],
  links: {
    github: 'https://github.com/vitejs/vite',
    npm: 'https://www.npmjs.com/package/@qtd/vite-plugin-lib-legacy',
    website: 'https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme',
  },
  source: {
    github: 'vitejs/vite',
    npm: '@qtd/vite-plugin-lib-legacy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
