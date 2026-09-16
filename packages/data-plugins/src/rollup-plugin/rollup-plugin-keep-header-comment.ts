import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-keep-header-comment',
  description: 'A rollup plugin to keep the header comments from source in the declaration file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'comment',
  ],
  source: {
    github: 'peachest/rollup-plugin-keep-header-comment',
    npm: 'rollup-plugin-keep-header-comment',
  },
  links: {
    github: 'https://github.com/peachest/rollup-plugin-keep-header-comment',
    npm: 'https://www.npmjs.com/package/rollup-plugin-keep-header-comment',
    website: 'https://github.com/peachest/rollup-plugin-keep-header-comment',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
