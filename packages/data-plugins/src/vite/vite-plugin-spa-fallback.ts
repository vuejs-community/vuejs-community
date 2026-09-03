import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spa-fallback',
  description: 'Vite 2 plugin that fix dev server not rewriting the path includes a dot, while keeping support for serving existing files. - [vite#2190](https://github.com/vitejs/vite/issues/2190) - [vite#2245](https://github.com/vitejs/vite/issues/2245) - [vite#2415](ht',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gluck/vite-plugin-spa-fallback',
    npm: 'https://www.npmjs.com/package/vite-plugin-spa-fallback',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 14,
    },
  },
})
