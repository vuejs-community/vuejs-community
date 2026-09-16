import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@idkwtm/simple-posts',
  description: 'Simple Posts is a tool to help you build a Markdown-based static React site with posts and pages. It includes necessary types, React context, and Vite plugin. It can also generate a sitemap and RSS feed.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'idkwtm',
  ],
  source: {
    github: 'spencersokol/simple-posts',
    npm: '@idkwtm/simple-posts',
  },
  links: {
    github: 'https://github.com/spencersokol/simple-posts',
    npm: 'https://www.npmjs.com/package/@idkwtm/simple-posts',
    website: 'https://github.com/spencersokol/simple-posts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 102,
      weekly: 23,
    },
  },
})
