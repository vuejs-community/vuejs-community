import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typed-i18next-loader',
  description: 'Generate a virtual module for resources and type definitions for i18next.',
  version: '2.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'i18next',
    'typescript',
    'loader',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rowellx68/i18next-utilities',
    npm: 'https://www.npmjs.com/package/vite-plugin-typed-i18next-loader',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 2,
    },
  },
})
