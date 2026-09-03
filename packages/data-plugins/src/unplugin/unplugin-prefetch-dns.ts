import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-prefetch-dns',
  description: 'Automatically collect the domain name in the code and insert it into the head of html',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/jianxing-xu/unplugin-dns-prefetch',
    npm: 'https://www.npmjs.com/package/unplugin-prefetch-dns',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
