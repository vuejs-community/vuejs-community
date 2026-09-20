import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@knewbeing/vitepress-plugin-autosidebar-toc',
  description: 'Auto-generate sidebar, navigation, and blog components for VitePress. Provides Markdown scanning, metadata extraction, and ready-to-use components (AutoToc, SidebarArticleList).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs',
    npm: 'https://www.npmjs.com/package/@knewbeing/vitepress-plugin-autosidebar-toc',
    website: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs#readme',
  },
  source: {
    github: 'VitepressAwesome/vitepress-plugin-blogs',
    npm: '@knewbeing/vitepress-plugin-autosidebar-toc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 7,
    },
  },
})
