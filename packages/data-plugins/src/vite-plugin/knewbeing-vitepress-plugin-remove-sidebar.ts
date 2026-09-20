import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@knewbeing/vitepress-plugin-remove-sidebar',
  description: 'Vite plugin for VitePress that replaces auto-generated sidebar entries with empty placeholders, keeping the sidebar panel visible for custom slot components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'sidebar',
    'vite-plugin',
    'typescript',
  ],
  links: {
    github: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs',
    npm: 'https://www.npmjs.com/package/@knewbeing/vitepress-plugin-remove-sidebar',
    website: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs#readme',
  },
  source: {
    github: 'VitepressAwesome/vitepress-plugin-blogs',
    npm: '@knewbeing/vitepress-plugin-remove-sidebar',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
