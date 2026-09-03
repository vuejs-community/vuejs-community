import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-isomorphic-import',
  description: 'A vite plugin that allows you to configure whether to import modules in the server-side or client-side.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'isomorphic',
    'import',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LyzSg/vite-plugin-isomorphic-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-isomorphic-import',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
