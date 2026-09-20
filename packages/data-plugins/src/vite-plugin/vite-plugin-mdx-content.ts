import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mdx-content',
  description: 'Vite plugin that scans MDX content directories and generates a manifest file with frontmatter metadata and dynamic imports',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mdx',
    'react',
  ],
  links: {
    github: 'https://github.com/LiamDochartaigh/vite-plugin-mdx-content',
    npm: 'https://www.npmjs.com/package/vite-plugin-mdx-content',
    website: 'https://github.com/LiamDochartaigh/vite-plugin-mdx-content#readme',
  },
  source: {
    github: 'LiamDochartaigh/vite-plugin-mdx-content',
    npm: 'vite-plugin-mdx-content',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
