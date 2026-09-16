import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-i18n-auto',
  description: 'This is a tools to help you work i18n automatically in rollup or vite.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    npm: 'rollup-plugin-i18n-auto',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-i18n-auto',
    website: 'https://github.com/pekonchan/rollup-plugin-i18n-auto#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 55,
      weekly: 8,
    },
  },
})
