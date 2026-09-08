import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-import-types',
  description: 'for own use',
  icon: 'icon:dark-unplugin',
  version: '0.1.0',
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
    github: 'Cheng-DX/unplugin-test',
    npm: 'unplugin-auto-import-types',
  },
  links: {
    github: 'https://github.com/Cheng-DX/unplugin-test',
    npm: 'https://www.npmjs.com/package/unplugin-auto-import-types',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
