import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-literal-replacer',
  description: 'Rollup plugin for replacing string literals in specific function calls with customizable transformation rules. Ideal for i18n key hashing and localization workflows.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'i18n',
    'string-replacement',
    'ast',
    'magic-string',
    'code-transformation',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/FuXingYu-fxy/rollup-plugin-literal-replacer',
    npm: 'https://www.npmjs.com/package/rollup-plugin-literal-replacer',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 9,
    },
  },
})
