import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-merge-and-inject-css',
  description: 'A rollup plugin to merge all css files and inject them to top of the styles blocks',
  version: '1.1.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'merge',
    'inject',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Norserium/rollup-plugin-merge-and-inject-css',
    npm: 'https://www.npmjs.com/package/rollup-plugin-merge-and-inject-css',
  },
  stats: {
    downloads: {
      monthly: 429,
      weekly: 141,
    },
  },
})
