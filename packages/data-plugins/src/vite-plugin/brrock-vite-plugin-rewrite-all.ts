import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brrock/vite-plugin-rewrite-all',
  description: 'Vite plugin that fix dev server not rewriting the path includes a dot [vite#2190](https://github.com/vitejs/vite/issues/2190) and my vite router project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'spa',
    'rewrite',
    'history-api-fallback',
  ],
  source: {
    github: 'brrock/vite-plugin-rewrite-all',
    npm: '@brrock/vite-plugin-rewrite-all',
  },
  links: {
    github: 'https://github.com/brrock/vite-plugin-rewrite-all',
    npm: 'https://www.npmjs.com/package/@brrock/vite-plugin-rewrite-all',
    website: 'https://github.com/brrock/vite-plugin-rewrite-all',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 207,
      weekly: 56,
    },
  },
})
