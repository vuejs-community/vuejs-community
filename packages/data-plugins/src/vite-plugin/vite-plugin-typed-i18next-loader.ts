import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typed-i18next-loader',
  description: 'Generate a virtual module for resources and type definitions for i18next.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'i18next',
    'typescript',
    'loader',
  ],
  source: {
    github: 'rowellx68/i18next-utilities',
    npm: 'vite-plugin-typed-i18next-loader',
  },
  links: {
    github: 'https://github.com/rowellx68/i18next-utilities',
    npm: 'https://www.npmjs.com/package/vite-plugin-typed-i18next-loader',
    website: 'https://github.com/rowellx68/i18next-utilities#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
