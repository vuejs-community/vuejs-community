import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-diff-compiler',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'FliPPeDround/vite-plugin-diff-compiler',
    npm: 'vite-plugin-diff-compiler',
  },
  links: {
    github: 'https://github.com/FliPPeDround/vite-plugin-diff-compiler',
    npm: 'https://www.npmjs.com/package/vite-plugin-diff-compiler',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
