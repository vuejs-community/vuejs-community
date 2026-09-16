import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mdsvex-pages',
  description: 'Markdown-based documentation/blog generator built with MDsveX.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'mdsvex',
    'svelte',
    'markdown',
    'documentation',
  ],
  source: {
    github: 'knightss27/rollup-plugin-mdsvex-pages',
    npm: 'rollup-plugin-mdsvex-pages',
  },
  links: {
    github: 'https://github.com/knightss27/rollup-plugin-mdsvex-pages',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mdsvex-pages',
    website: 'https://github.com/knightss27/rollup-plugin-mdsvex-pages#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 69,
      weekly: 8,
    },
  },
})
