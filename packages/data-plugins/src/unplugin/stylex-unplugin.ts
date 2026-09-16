import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'stylex-unplugin',
  description: 'Universal bundler plugin for StyleX using unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'stylex',
    'css',
    'unplugin',
    'vite',
    'rollup',
    'webpack',
    'rspack',
  ],
  source: {
    npm: 'stylex-unplugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/stylex-unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 59,
      weekly: 14,
    },
  },
})
