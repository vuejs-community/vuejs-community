import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lemon-clown-wpg/rollup-plugin-postcss-dts',
  description: 'generate *.d.ts for *.styl|*.scss|*.sass|*.css files',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'postcss',
    'css d.ts',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/lemon-clown/web-play-ground',
    npm: 'https://www.npmjs.com/package/@lemon-clown-wpg/rollup-plugin-postcss-dts',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 7,
    },
  },
})
