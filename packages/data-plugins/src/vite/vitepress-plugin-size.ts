import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-size',
  description: 'VitePress plugin to display build distribution size after completion',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'bundle',
    'bundle-size',
    'docs',
    'documentation',
    'pigeonposse',
    'plugin',
    'pp',
    'size',
    'vite',
    'vite-plugin',
    'vitepress',
    'vitepress-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/angelespejo/vitepress-plugin-size',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-size',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
