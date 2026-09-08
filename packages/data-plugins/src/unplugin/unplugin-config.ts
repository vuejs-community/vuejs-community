import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-config',
  description: 'Register global imports on demand for Vite and Webpack',
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
    github: 'kirklin/unplugin-config',
    npm: 'unplugin-config',
  },
  links: {
    github: 'https://github.com/kirklin/unplugin-config',
    npm: 'https://www.npmjs.com/package/unplugin-config',
  },
  stats: {
    downloads: {
      monthly: 3456,
      weekly: 927,
    },
  },
})
