import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-css-checker',
  description: 'Check CSS pollution for bundlers',
  version: '1.0.0',
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
    github: 'https://github.com/He110te4m/unplugin-css-checker',
    npm: 'https://www.npmjs.com/package/unplugin-css-checker',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
