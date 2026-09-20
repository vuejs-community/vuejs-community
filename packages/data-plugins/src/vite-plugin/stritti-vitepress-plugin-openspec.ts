import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stritti/vitepress-plugin-openspec',
  description: 'A VitePress plugin that integrates OpenSpec documentation into your VitePress site',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'openspec',
    'plugin',
    'vite-plugin',
    'vitepress',
    'vitepress-plugin',
    'documentation',
    'api-docs',
  ],
  links: {
    github: 'https://github.com/stritti/vitepress-plugin-openspec',
    npm: 'https://www.npmjs.com/package/@stritti/vitepress-plugin-openspec',
    website: 'https://github.com/stritti/vitepress-plugin-openspec#readme',
  },
  source: {
    github: 'stritti/vitepress-plugin-openspec',
    npm: '@stritti/vitepress-plugin-openspec',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
