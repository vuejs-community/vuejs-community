import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ue2',
  description: 'Roll .vue files for vue2.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vue',
    'vue2',
  ],
  links: {
    github: 'https://github.com/vuejs/rollup-plugin-vue',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ue2',
    website: 'https://github.com/vuejs/rollup-plugin-vue#readme',
  },
  source: {
    github: 'vuejs/rollup-plugin-vue',
    npm: 'rollup-plugin-ue2',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
