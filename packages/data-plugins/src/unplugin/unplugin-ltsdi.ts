import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ltsdi',
  description: '"Lazy" Tree shake dynamic imports',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'tree-shake',
  ],
  source: {
    github: 'logotip4ik/unplugin-ltsdi',
    npm: 'unplugin-ltsdi',
  },
  links: {
    github: 'https://github.com/logotip4ik/unplugin-ltsdi',
    npm: 'https://www.npmjs.com/package/unplugin-ltsdi',
    website: 'https://github.com/logotip4ik/unplugin-ltsdi#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
