import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fink/rollup',
  description: 'rollup plugin for bundling fink modules using https://rollupjs.org',
  version: '1.4.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'fink-lang',
    'fink',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/fink-lang/rollup',
    npm: 'https://www.npmjs.com/package/@fink/rollup',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 6,
    },
  },
})
