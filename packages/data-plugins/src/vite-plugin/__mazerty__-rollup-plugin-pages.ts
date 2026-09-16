import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@__mazerty__/rollup-plugin-pages',
  description: 'Rollup/Vite plugin that can be used to extract metadata from a directory of markdown files with frontmatter (such as blog pages)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'pages',
    'markdown',
    'frontmatter',
    'blog',
  ],
  source: {
    npm: '@__mazerty__/rollup-plugin-pages',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@__mazerty__/rollup-plugin-pages',
    website: 'https://codeberg.org/mazerty/rollup-plugin-pages',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 85,
      weekly: 9,
    },
  },
})
