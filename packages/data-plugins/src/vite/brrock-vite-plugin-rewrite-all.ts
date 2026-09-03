import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@brrock/vite-plugin-rewrite-all',
  description: 'Vite plugin that fix dev server not rewriting the path includes a dot [vite#2190](https://github.com/vitejs/vite/issues/2190) and my vite router project',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'spa',
    'rewrite',
    'history-api-fallback',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/brrock/vite-plugin-rewrite-all',
    npm: 'https://www.npmjs.com/package/@brrock/vite-plugin-rewrite-all',
  },
  stats: {
    downloads: {
      monthly: 270,
      weekly: 60,
    },
  },
})
