import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ltsdi',
  description: '"Lazy" Tree shake dynamic imports',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'tree-shake',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/logotip4ik/unplugin-ltsdi',
    npm: 'https://www.npmjs.com/package/unplugin-ltsdi',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
