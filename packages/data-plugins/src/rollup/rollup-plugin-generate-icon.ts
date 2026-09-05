import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-icon',
  description: 'A rollup plugin to generate icons of different sizes',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'jimp',
    'icons',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kaze-k/rollup-plugin-generate-icon',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-icon',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
