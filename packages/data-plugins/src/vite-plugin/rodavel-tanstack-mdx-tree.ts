import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rodavel/tanstack-mdx-tree',
  description: 'Typed navigation trees from MDX content colocated with TanStack Router routes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'content-tree',
    'frontmatter',
    'navigation',
  ],
  links: {
    github: 'https://github.com/rodavel-labs/vite-plugin-content-tree',
    npm: 'https://www.npmjs.com/package/@rodavel/tanstack-mdx-tree',
    website: 'https://github.com/rodavel-labs/vite-plugin-content-tree#readme',
  },
  source: {
    github: 'rodavel-labs/vite-plugin-content-tree',
    npm: '@rodavel/tanstack-mdx-tree',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
