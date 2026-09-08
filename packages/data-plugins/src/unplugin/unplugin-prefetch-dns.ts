import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-prefetch-dns',
  description: 'Automatically collect the domain name in the code and insert it into the head of html',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'jianxing-xu/unplugin-dns-prefetch',
    npm: 'unplugin-prefetch-dns',
  },
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
