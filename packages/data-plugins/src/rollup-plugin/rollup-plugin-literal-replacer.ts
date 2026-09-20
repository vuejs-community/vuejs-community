import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-literal-replacer',
  description: 'Rollup plugin for replacing string literals in specific function calls with customizable transformation rules. Ideal for i18n key hashing and localization workflows.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'i18n',
    'string-replacement',
    'ast',
    'magic-string',
    'code-transformation',
  ],
  links: {
    github: 'https://github.com/FuXingYu-fxy/rollup-plugin-literal-replacer',
    npm: 'https://www.npmjs.com/package/rollup-plugin-literal-replacer',
    website: 'https://github.com/FuXingYu-fxy/rollup-plugin-literal-replacer#readme',
  },
  source: {
    github: 'FuXingYu-fxy/rollup-plugin-literal-replacer',
    npm: 'rollup-plugin-literal-replacer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
