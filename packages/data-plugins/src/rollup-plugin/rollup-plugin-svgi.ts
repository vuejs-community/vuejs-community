import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svgi',
  description: 'Import SVG files as JSX components',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'svg',
    'jsx',
    'preact',
    'react',
    'components',
  ],
  links: {
    github: 'https://github.com/kuzivany/rollup-plugin-svgi',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svgi',
    website: 'https://github.com/kuzivany/rollup-plugin-svgi',
  },
  source: {
    github: 'kuzivany/rollup-plugin-svgi',
    npm: 'rollup-plugin-svgi',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 54,
      weekly: 6,
    },
  },
})
