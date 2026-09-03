import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@idkwtm/simple-posts',
  description: 'Simple Posts is a tool to help you build a Markdown-based static React site with posts and pages. It includes necessary types, React context, and Vite plugin. It can also generate a sitemap and RSS feed.',
  version: '0.0.60',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'idkwtm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/spencersokol/simple-posts',
    npm: 'https://www.npmjs.com/package/@idkwtm/simple-posts',
  },
  stats: {
    downloads: {
      monthly: 158,
      weekly: 7,
    },
  },
})
