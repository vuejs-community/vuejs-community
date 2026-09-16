import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@knewbeing/vitepress-plugin-page-properties',
  description: 'Page-properties Vite plugin for VitePress: word count, reading time, and dev-mode HMR patch. Fully self-contained, no @nolebase dependency.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'VitepressAwesome/vitepress-plugin-blogs',
    npm: '@knewbeing/vitepress-plugin-page-properties',
  },
  links: {
    github: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs',
    npm: 'https://www.npmjs.com/package/@knewbeing/vitepress-plugin-page-properties',
    website: 'https://github.com/VitepressAwesome/vitepress-plugin-blogs#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 58,
      weekly: 5,
    },
  },
})
