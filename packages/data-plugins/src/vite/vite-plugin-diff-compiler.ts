import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-diff-compiler',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'diff-compiler',
    'transform',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/FliPPeDround/vite-plugin-diff-compiler',
    npm: 'https://www.npmjs.com/package/vite-plugin-diff-compiler',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
