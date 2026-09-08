import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-replacer',
  description: 'a rollup plugin to replace strings in generated bundles',
  icon: 'logos:rollupjs',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'replace',
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'adriankremer/rollup-plugin-replacer',
    npm: 'rollup-plugin-replacer',
  },
  links: {
    github: 'https://github.com/adriankremer/rollup-plugin-replacer',
    npm: 'https://www.npmjs.com/package/rollup-plugin-replacer',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
