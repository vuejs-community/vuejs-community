import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-frontmatter-collection',
  description: 'Vite plugin that collect frontmatter from your MD/MDX files under a virtual module with HMR invalidation and type-safety',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'frontmatter',
    'markdown',
    'mdx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/PhilDL/vite-plugin-frontmatter-collection',
    npm: 'https://www.npmjs.com/package/vite-plugin-frontmatter-collection',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
