import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-re',
  description: 'rollup replace plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'regexp',
    'replace',
  ],
  source: {
    github: 'jetiny/rollup-plugin-re',
    npm: 'rollup-plugin-re',
  },
  links: {
    github: 'https://github.com/jetiny/rollup-plugin-re',
    npm: 'https://www.npmjs.com/package/rollup-plugin-re',
    website: 'https://github.com/jetiny/rollup-plugin-re#readme',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 39274,
      weekly: 11730,
    },
  },
})
