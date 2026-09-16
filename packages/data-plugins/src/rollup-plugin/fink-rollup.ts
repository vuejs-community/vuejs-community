import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fink/rollup',
  description: 'rollup plugin for bundling fink modules using https://rollupjs.org',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'fink-lang',
    'fink',
  ],
  source: {
    github: 'fink-lang/rollup',
    npm: '@fink/rollup',
  },
  links: {
    github: 'https://github.com/fink-lang/rollup',
    npm: 'https://www.npmjs.com/package/@fink/rollup',
    website: 'https://github.com/fink-lang/rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
