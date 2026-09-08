import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-kdu',
  description: 'Roll .kdu files',
  icon: 'logos:rollupjs',
  version: '5.1.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'kdu',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'kdujs/rollup-plugin-kdu',
    npm: 'rollup-plugin-kdu',
  },
  links: {
    github: 'https://github.com/kdujs/rollup-plugin-kdu',
    npm: 'https://www.npmjs.com/package/rollup-plugin-kdu',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
