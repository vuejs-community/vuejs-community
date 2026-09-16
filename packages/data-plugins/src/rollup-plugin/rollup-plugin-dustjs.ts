import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dustjs',
  description: 'A rollup plugin for importing dustjs templates as modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'dustjs',
    'dustjs-linkedin',
    'rollup',
    'rollup-plugin',
    'templates',
  ],
  source: {
    github: 'chrisdothtml/rollup-plugin-dustjs',
    npm: 'rollup-plugin-dustjs',
  },
  links: {
    github: 'https://github.com/chrisdothtml/rollup-plugin-dustjs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dustjs',
    website: 'https://github.com/chrisdothtml/rollup-plugin-dustjs#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
