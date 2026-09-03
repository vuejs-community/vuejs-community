import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-add-banner',
  description: 'A Rollup plugin that adds banner comments to the output bundle.',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'banner',
    'header',
    'comment',
    'license',
    'prepend',
    'sourcemap',
    'bundler',
    'vite',
    'typescript',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/saqqdy/rollup-plugin-add-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-add-banner',
  },
  stats: {
    downloads: {
      monthly: 89,
      weekly: 12,
    },
  },
})
