import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nomatter',
  description: 'Vite plugin that derives frontmatter from Markdown content, removing the need to write frontmatter.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'astro',
    'starlight',
    'markdown',
    'frontmatter',
  ],
  source: {
    github: 'idleberg/vite-plugin-nomatter',
    npm: 'vite-plugin-nomatter',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-nomatter',
    npm: 'https://www.npmjs.com/package/vite-plugin-nomatter',
    website: 'https://github.com/idleberg/vite-plugin-nomatter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
