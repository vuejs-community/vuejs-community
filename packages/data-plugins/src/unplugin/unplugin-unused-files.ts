import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unused-files',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.1',
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
    github: 'https://github.com/fightwithtiger/unplugin-unused-files',
    npm: 'https://www.npmjs.com/package/unplugin-unused-files',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
