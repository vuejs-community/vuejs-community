import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mdsvex-pages',
  description: 'Markdown-based documentation/blog generator built with MDsveX.',
  icon: 'logos:rollupjs',
  version: '1.2.22',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'mdsvex',
    'svelte',
    'markdown',
    'documentation',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'knightss27/rollup-plugin-mdsvex-pages',
    npm: 'rollup-plugin-mdsvex-pages',
  },
  links: {
    github: 'https://github.com/knightss27/rollup-plugin-mdsvex-pages',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mdsvex-pages',
  },
  stats: {
    downloads: {
      monthly: 101,
      weekly: 11,
    },
  },
})
