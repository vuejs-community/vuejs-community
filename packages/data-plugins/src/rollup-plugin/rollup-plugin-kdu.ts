import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-kdu',
  description: 'Roll .kdu files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'kdu',
  ],
  source: {
    github: 'kdujs/rollup-plugin-kdu',
    npm: 'rollup-plugin-kdu',
  },
  links: {
    github: 'https://github.com/kdujs/rollup-plugin-kdu',
    npm: 'https://www.npmjs.com/package/rollup-plugin-kdu',
    website: 'https://github.com/kdujs/rollup-plugin-kdu#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
