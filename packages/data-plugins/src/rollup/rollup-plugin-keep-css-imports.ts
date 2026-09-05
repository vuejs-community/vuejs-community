import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-keep-css-imports',
  description: 'Rollup plugin that allows to maintain the original structure of style imports without altering them during the bundling process',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'css-modules',
    'sass',
    'scss',
    'keep',
    'preserve',
    'imports',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/SLTKA/rollup-plugin-keep-css-imports',
    npm: 'https://www.npmjs.com/package/rollup-plugin-keep-css-imports',
  },
  stats: {
    downloads: {
      monthly: 10786,
      weekly: 2895,
    },
  },
})
