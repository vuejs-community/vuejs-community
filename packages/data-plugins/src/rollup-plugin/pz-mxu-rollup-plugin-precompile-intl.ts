import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pz-mxu/rollup-plugin-precompile-intl',
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
  links: {
    github: 'https://github.com/cibernox/rollup-plugin-precompile-intl',
    npm: 'https://www.npmjs.com/package/@pz-mxu/rollup-plugin-precompile-intl',
  },
  source: {
    github: 'cibernox/rollup-plugin-precompile-intl',
    npm: '@pz-mxu/rollup-plugin-precompile-intl',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
