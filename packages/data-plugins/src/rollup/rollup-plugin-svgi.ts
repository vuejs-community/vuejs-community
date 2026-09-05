import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svgi',
  description: 'Import SVG files as JSX components',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'svg',
    'jsx',
    'preact',
    'react',
    'components',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kuzivany/rollup-plugin-svgi',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svgi',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 12,
    },
  },
})
