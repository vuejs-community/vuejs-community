import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vitepress-auto-nav',
  description: 'Auto-generate VitePress default-theme nav and sidebar from runtime pages',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'vitepress',
    'vite-plugin',
    'vitepress-plugin',
    'vitepress-auto',
    'auto-nav',
    'auto-sidebar',
    'auto-menu',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Xaviw/vite-plugin-vitepress-auto-nav',
    npm: 'https://www.npmjs.com/package/vite-plugin-vitepress-auto-nav',
  },
  stats: {
    downloads: {
      monthly: 149,
      weekly: 25,
    },
  },
})
