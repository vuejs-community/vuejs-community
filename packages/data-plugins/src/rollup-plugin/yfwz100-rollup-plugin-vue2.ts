import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yfwz100/rollup-plugin-vue2',
  description: 'Roll .vue files, forked from an older version of rollup-plugin-vue targeting Vue 2.',
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
    npm: 'https://www.npmjs.com/package/@yfwz100/rollup-plugin-vue2',
    website: 'https://github.com/fxwz100/rollup-plugin-vue2#readme',
  },
  source: {
    github: 'vuejs/rollup-plugin-vue',
    npm: '@yfwz100/rollup-plugin-vue2',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
