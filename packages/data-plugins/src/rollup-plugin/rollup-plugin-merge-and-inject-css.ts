import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-merge-and-inject-css',
  description: 'A rollup plugin to merge all css files and inject them to top of the styles blocks',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'merge',
    'inject',
  ],
  source: {
    github: 'Norserium/rollup-plugin-merge-and-inject-css',
    npm: 'rollup-plugin-merge-and-inject-css',
  },
  links: {
    github: 'https://github.com/Norserium/rollup-plugin-merge-and-inject-css',
    npm: 'https://www.npmjs.com/package/rollup-plugin-merge-and-inject-css',
    website: 'https://github.com/Norserium/rollup-plugin-merge-and-inject-css',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 539,
      weekly: 141,
    },
  },
})
