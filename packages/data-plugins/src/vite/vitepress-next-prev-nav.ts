import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vitepress-next-prev-nav',
  description: 'A VitePress plugin to automatically generate prev/next navigation links from custom article lists, featuring a gennav CLI and custom UI component.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vitepress',
    'vite-plugin',
    'vue',
    'next-prev',
    'navigation',
    'docs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/truonghoangnguyen/vitepress-next-prev-nav',
    npm: 'https://www.npmjs.com/package/vitepress-next-prev-nav',
  },
  stats: {
    downloads: {
      monthly: 352,
      weekly: 13,
    },
  },
})
