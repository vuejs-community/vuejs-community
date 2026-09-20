import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-source',
  description: 'A rollup plugin for the npm inline-source tool that inlines flagged js, css, and img sources in html',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'es2015',
    'inline',
    'inline-source',
  ],
  links: {
    github: 'https://github.com/liam-swinney/rollup-plugin-inline-source',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-source',
    website: 'https://github.com/liam-swinney/rollup-plugin-inline-source#readme',
  },
  source: {
    github: 'liam-swinney/rollup-plugin-inline-source',
    npm: 'rollup-plugin-inline-source',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
