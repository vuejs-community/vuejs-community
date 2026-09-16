import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-prefetch-dns',
  description: 'Automatically collect the domain name in the code and insert it into the head of html',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'jianxing-xu/unplugin-dns-prefetch',
    npm: 'unplugin-prefetch-dns',
  },
  links: {
    github: 'https://github.com/jianxing-xu/unplugin-dns-prefetch',
    npm: 'https://www.npmjs.com/package/unplugin-prefetch-dns',
    website: 'https://github.com/jianxing-xu/unplugin-dns-prefetch#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
