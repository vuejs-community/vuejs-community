import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unifast/vite',
  description: 'Vite plugin for unifast — transform Markdown and MDX files into JS modules',
  version: '0.0.10',
  category: 'plugin',
  tags: [
    'markdown',
    'mdx',
    'unifast',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kenzo-pj/unifast',
    npm: 'https://www.npmjs.com/package/@unifast/vite',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
