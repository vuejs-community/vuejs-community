import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nomatter',
  description: 'Vite plugin that derives frontmatter from Markdown content, removing the need to write frontmatter.',
  icon: 'logos:vite-icon',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'astro',
    'starlight',
    'markdown',
    'frontmatter',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'idleberg/vite-plugin-nomatter',
    npm: 'vite-plugin-nomatter',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-nomatter',
    npm: 'https://www.npmjs.com/package/vite-plugin-nomatter',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 2,
    },
  },
})
