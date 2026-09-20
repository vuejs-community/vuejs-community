import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'eagle-rollup-plugin-vue',
  description: 'modified version of rollup-plugin-vue',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vue',
  ],
  links: {
    github: 'https://github.com/vuejs/rollup-plugin-vue',
    npm: 'https://www.npmjs.com/package/eagle-rollup-plugin-vue',
    website: 'https://github.com/vuejs/rollup-plugin-vue#readme',
  },
  source: {
    github: 'vuejs/rollup-plugin-vue',
    npm: 'eagle-rollup-plugin-vue',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
