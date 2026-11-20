import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@binarynoir/vite-plugin-blog',
  description: 'A static Markdown blog for any Vite site: posts and lists as plain HTML in your own page shell, with search, topics, pagination, feeds, structured data and share links built in, optional Vue components, and build-time Shiki highlighting that works under a',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'blog',
    'markdown',
    'markdown-it',
    'shiki',
    'static-site',
    'mpa',
    'csp',
    'search',
    'vue',
    'seo',
    'rss',
  ],
  links: {
    github: 'https://github.com/binarynoir/vite-plugin-blog',
    npm: 'https://www.npmjs.com/package/@binarynoir/vite-plugin-blog',
    website: 'https://github.com/binarynoir/vite-plugin-blog#readme',
  },
  source: {
    github: 'binarynoir/vite-plugin-blog',
    npm: '@binarynoir/vite-plugin-blog',
  },
})
