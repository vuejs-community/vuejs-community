import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-css-checker',
  description: 'Check CSS pollution for bundlers',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'He110te4m/unplugin-css-checker',
    npm: 'unplugin-css-checker',
  },
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
