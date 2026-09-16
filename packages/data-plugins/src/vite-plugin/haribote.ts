import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'haribote',
  description: 'Vite plugin that SSRs only meta tags, leaving the rest as CSR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
    'meta',
    'seo',
    'spa',
    'csr',
  ],
  source: {
    github: 'mimifuwacc/haribote',
    npm: 'haribote',
  },
  links: {
    github: 'https://github.com/mimifuwacc/haribote',
    npm: 'https://www.npmjs.com/package/haribote',
    website: 'https://github.com/mimifuwacc/haribote#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
