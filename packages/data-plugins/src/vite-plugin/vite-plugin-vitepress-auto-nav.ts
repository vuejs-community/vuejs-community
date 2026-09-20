import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vitepress-auto-nav',
  description: 'Auto-generate VitePress default-theme nav and sidebar from runtime pages',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'vite-plugin',
    'vitepress-plugin',
    'vitepress-auto',
    'auto-nav',
    'auto-sidebar',
    'auto-menu',
  ],
  links: {
    github: 'https://github.com/Xaviw/vite-plugin-vitepress-auto-nav',
    npm: 'https://www.npmjs.com/package/vite-plugin-vitepress-auto-nav',
    website: 'https://xaviw.github.io/XaviDocs/',
  },
  source: {
    github: 'Xaviw/vite-plugin-vitepress-auto-nav',
    npm: 'vite-plugin-vitepress-auto-nav',
  },
  stats: {
    stars: 27,
    downloads: {
      monthly: 87,
      weekly: 19,
    },
  },
})
