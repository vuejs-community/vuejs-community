import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-precompile-intl',
  description: 'Compile translations in ICU message format to invocable functions at build time',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'intl',
    'precompile',
    'translations',
    'i18n',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/cibernox/rollup-plugin-precompile-intl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-precompile-intl',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
