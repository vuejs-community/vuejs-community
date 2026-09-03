import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rodavel/tanstack-mdx-tree',
  description: 'Typed navigation trees from MDX content colocated with TanStack Router routes',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'content-tree',
    'frontmatter',
    'navigation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rodavel-labs/vite-plugin-content-tree',
    npm: 'https://www.npmjs.com/package/@rodavel/tanstack-mdx-tree',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
