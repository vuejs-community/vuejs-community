import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ignore-import',
  description: 'Ignore import rollup plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'ignore',
    'import',
  ],
  source: {
    github: 'yohangz/rollup-plugin-ignore-import',
    npm: 'rollup-plugin-ignore-import',
  },
  links: {
    github: 'https://github.com/yohangz/rollup-plugin-ignore-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ignore-import',
    website: 'https://github.com/yohangz/rollup-plugin-ignore-import#readme',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 16142,
      weekly: 1187,
    },
  },
})
