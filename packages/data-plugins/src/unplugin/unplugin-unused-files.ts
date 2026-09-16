import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unused-files',
  description: 'Register global imports on demand for Vite and Webpack',
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
    github: 'fightwithtiger/unplugin-unused-files',
    npm: 'unplugin-unused-files',
  },
  links: {
    github: 'https://github.com/fightwithtiger/unplugin-unused-files',
    npm: 'https://www.npmjs.com/package/unplugin-unused-files',
    website: 'https://github.com/fightwithtiger/unplugin-unused-files#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
