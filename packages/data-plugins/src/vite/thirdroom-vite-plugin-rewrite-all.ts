import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@thirdroom/vite-plugin-rewrite-all',
  description: 'Vite 2 plugin that fix dev server not rewriting the path includes a dot [vite#2190](https://github.com/vitejs/vite/issues/2190)',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ivesia/vite-plugin-rewrite-all',
    npm: 'https://www.npmjs.com/package/@thirdroom/vite-plugin-rewrite-all',
  },
  stats: {
    downloads: {
      monthly: 256,
      weekly: 14,
    },
  },
})
