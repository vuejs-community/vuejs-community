import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stritti/vitepress-plugin-openspec',
  description: 'A VitePress plugin that integrates OpenSpec documentation into your VitePress site',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'openspec',
    'plugin',
    'vite-plugin',
    'vitepress',
    'vitepress-plugin',
    'documentation',
    'api-docs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stritti/vitepress-plugin-openspec',
    npm: 'https://www.npmjs.com/package/@stritti/vitepress-plugin-openspec',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 10,
    },
  },
})
