import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@thirdroom/vite-plugin-rewrite-all',
  description: 'Vite 2 plugin that fix dev server not rewriting the path includes a dot [vite#2190](https://github.com/vitejs/vite/issues/2190)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ivesia/vite-plugin-rewrite-all',
    npm: 'https://www.npmjs.com/package/@thirdroom/vite-plugin-rewrite-all',
    website: 'https://github.com/ivesia/vite-plugin-rewrite-all',
  },
  source: {
    github: 'ivesia/vite-plugin-rewrite-all',
    npm: '@thirdroom/vite-plugin-rewrite-all',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 83,
      weekly: 9,
    },
  },
})
