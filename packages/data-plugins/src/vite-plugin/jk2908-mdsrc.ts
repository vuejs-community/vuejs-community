import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jk2908/mdsrc',
  description: 'A Vite plugin for turning structured Markdown content into importable, type-safe modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'markdown',
    'vite-plugin',
    'typescript',
    'content-management',
    'frontmatter',
  ],
  source: {
    github: 'jk2908/mdsrc',
    npm: '@jk2908/mdsrc',
  },
  links: {
    github: 'https://github.com/jk2908/mdsrc',
    npm: 'https://www.npmjs.com/package/@jk2908/mdsrc',
    website: 'https://github.com/jk2908/mdsrc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 46,
      weekly: 10,
    },
  },
})
