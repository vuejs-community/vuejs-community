import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-precompile-intl',
  description: 'Compile translations in ICU message format to invocable functions at build time',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'intl',
    'precompile',
    'translations',
    'i18n',
  ],
  source: {
    github: 'cibernox/rollup-plugin-precompile-intl',
    npm: 'rollup-plugin-precompile-intl',
  },
  links: {
    github: 'https://github.com/cibernox/rollup-plugin-precompile-intl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-precompile-intl',
    website: 'https://github.com/cibernox/rollup-plugin-precompile-intl#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
