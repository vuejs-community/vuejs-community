import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@knewbeing/vitepress-plugin-remove-sidebar',
  description: 'Vite plugin for VitePress that replaces auto-generated sidebar entries with empty placeholders, keeping the sidebar panel visible for custom slot components.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vitepress',
    'sidebar',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs',
    npm: 'https://www.npmjs.com/package/@knewbeing/vitepress-plugin-remove-sidebar',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
