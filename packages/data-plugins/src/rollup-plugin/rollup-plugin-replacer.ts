import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-replacer',
  description: 'a rollup plugin to replace strings in generated bundles',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'replace',
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/adriankremer/rollup-plugin-replacer',
    npm: 'https://www.npmjs.com/package/rollup-plugin-replacer',
    website: 'https://github.com/adriankremer/rollup-plugin-replacer#readme',
  },
  source: {
    github: 'adriankremer/rollup-plugin-replacer',
    npm: 'rollup-plugin-replacer',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
