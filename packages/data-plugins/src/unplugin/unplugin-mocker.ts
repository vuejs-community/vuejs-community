import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-mocker',
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
    github: 'kirklin/unplugin-mocker',
    npm: 'unplugin-mocker',
  },
  links: {
    github: 'https://github.com/kirklin/unplugin-mocker',
    npm: 'https://www.npmjs.com/package/unplugin-mocker',
    website: 'https://github.com/kirklin/unplugin-mocker#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
