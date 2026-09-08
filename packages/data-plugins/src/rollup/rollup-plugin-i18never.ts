import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-i18never',
  description: 'A rollup plugin based on i18never',
  icon: 'logos:rollupjs',
  version: '1.1.16',
  category: 'plugin',
  tags: [
    'i18never',
    'i18n',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'ksc-fe/i18never',
    npm: 'rollup-plugin-i18never',
  },
  links: {
    github: 'https://github.com/ksc-fe/i18never',
    npm: 'https://www.npmjs.com/package/rollup-plugin-i18never',
  },
  stats: {
    downloads: {
      monthly: 73,
      weekly: 8,
    },
  },
})
