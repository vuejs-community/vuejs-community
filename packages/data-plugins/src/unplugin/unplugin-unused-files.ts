import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unused-files',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'fightwithtiger/unplugin-unused-files',
    npm: 'unplugin-unused-files',
  },
  links: {
    github: 'https://github.com/fightwithtiger/unplugin-unused-files',
    npm: 'https://www.npmjs.com/package/unplugin-unused-files',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
