import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@knewbeing/vitepress-plugin-autosidebar-toc',
  description: 'Auto-generate sidebar, navigation, and blog components for VitePress. Provides Markdown scanning, metadata extraction, and ready-to-use components (AutoToc, SidebarArticleList).',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vitepress',
    'sidebar',
    'navigation',
    'blog',
    'markdown',
    'documentation',
    'vite-plugin',
    'vue3',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs',
    npm: 'https://www.npmjs.com/package/@knewbeing/vitepress-plugin-autosidebar-toc',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 4,
    },
  },
})
