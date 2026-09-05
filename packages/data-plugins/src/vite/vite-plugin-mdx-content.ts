import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mdx-content',
  description: 'Vite plugin that scans MDX content directories and generates a manifest file with frontmatter metadata and dynamic imports',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mdx',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LiamDochartaigh/vite-plugin-mdx-content',
    npm: 'https://www.npmjs.com/package/vite-plugin-mdx-content',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 0,
    },
  },
})
