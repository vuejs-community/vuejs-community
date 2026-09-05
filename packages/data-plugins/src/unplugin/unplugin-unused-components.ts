import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unused-components',
  description: 'Unplugin to detect unused components in your project',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
    'webpack4',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/BoYuanSu/unplugin-unused-components',
    npm: 'https://www.npmjs.com/package/unplugin-unused-components',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
