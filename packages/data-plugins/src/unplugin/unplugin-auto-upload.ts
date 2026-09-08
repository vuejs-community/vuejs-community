import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-upload',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.1.1-beta.2',
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
    github: 'bbcvc/unplugin-auto-upload',
    npm: 'unplugin-auto-upload',
  },
  links: {
    github: 'https://github.com/bbcvc/unplugin-auto-upload',
    npm: 'https://www.npmjs.com/package/unplugin-auto-upload',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
