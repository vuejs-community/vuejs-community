import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-alias-fork',
  description: 'Resolves aliases with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
  ],
  source: {
    github: 'DavraYoung/rollup-plugin-alias',
    npm: 'rollup-plugin-alias-fork',
  },
  links: {
    github: 'https://github.com/DavraYoung/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-alias-fork',
    website: 'https://github.com/frostney/rollup-plugin-alias#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 7,
    },
  },
})
