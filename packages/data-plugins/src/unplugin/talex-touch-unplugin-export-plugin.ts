import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@talex-touch/unplugin-export-plugin',
  description: 'Export unplugin for talex-touch',
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
    'tuff',
    'talex-tuff',
  ],
  links: {
    github: 'https://github.com/talex-touch/tuff',
    npm: 'https://www.npmjs.com/package/@talex-touch/unplugin-export-plugin',
    website: 'https://tuff.tagzxia.com',
  },
  source: {
    github: 'talex-touch/tuff',
    npm: '@talex-touch/unplugin-export-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 436,
      weekly: 24,
    },
  },
})
