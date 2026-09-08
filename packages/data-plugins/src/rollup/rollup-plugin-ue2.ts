import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ue2',
  description: 'Roll .vue files for vue2.',
  icon: 'logos:rollupjs',
  version: '5.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vue',
    'vue2',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'vuejs/rollup-plugin-vue',
    npm: 'rollup-plugin-ue2',
  },
  links: {
    github: 'https://github.com/vuejs/rollup-plugin-vue',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ue2',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
