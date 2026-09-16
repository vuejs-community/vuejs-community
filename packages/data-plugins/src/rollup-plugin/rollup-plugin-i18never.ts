import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-i18never',
  description: 'A rollup plugin based on i18never',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'i18never',
    'i18n',
    'rollup-plugin',
  ],
  source: {
    github: 'ksc-fe/i18never',
    npm: 'rollup-plugin-i18never',
  },
  links: {
    github: 'https://github.com/ksc-fe/i18never',
    npm: 'https://www.npmjs.com/package/rollup-plugin-i18never',
    website: 'https://github.com/ksc-fe/i18never#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
