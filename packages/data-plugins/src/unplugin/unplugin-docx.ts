import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-docx',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'docx',
    'docx-to-html',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/action-hong/unplugin-docx',
    npm: 'https://www.npmjs.com/package/unplugin-docx',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
