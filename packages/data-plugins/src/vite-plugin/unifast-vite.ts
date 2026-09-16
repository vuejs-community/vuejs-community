import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unifast/vite',
  description: 'Vite plugin for unifast — transform Markdown and MDX files into JS modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'markdown',
    'mdx',
    'unifast',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'kenzo-pj/unifast',
    npm: '@unifast/vite',
  },
  links: {
    github: 'https://github.com/kenzo-pj/unifast',
    npm: 'https://www.npmjs.com/package/@unifast/vite',
    website: 'https://unifast.dev',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 27,
      weekly: 9,
    },
  },
})
