import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'haribote',
  description: 'Vite plugin that SSRs only meta tags, leaving the rest as CSR',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
    'meta',
    'seo',
    'spa',
    'csr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mimifuwacc/haribote',
    npm: 'https://www.npmjs.com/package/haribote',
  },
  stats: {
    downloads: {
      monthly: 52,
      weekly: 1,
    },
  },
})
