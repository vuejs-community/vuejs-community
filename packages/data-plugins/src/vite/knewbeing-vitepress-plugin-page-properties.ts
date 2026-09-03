import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@knewbeing/vitepress-plugin-page-properties',
  description: 'Page-properties Vite plugin for VitePress: word count, reading time, and dev-mode HMR patch. Fully self-contained, no @nolebase dependency.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vitepress',
    'page-properties',
    'frontmatter',
    'word-count',
    'reading-time',
    'blog',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs',
    npm: 'https://www.npmjs.com/package/@knewbeing/vitepress-plugin-page-properties',
  },
  stats: {
    downloads: {
      monthly: 83,
      weekly: 22,
    },
  },
})
