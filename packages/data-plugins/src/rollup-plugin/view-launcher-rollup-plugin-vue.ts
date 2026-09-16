import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@view-launcher/rollup-plugin-vue',
  description: 'The rollup plugin of view-launcher for Vue',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'vue',
    'view-launcher',
    'rollup-plugin',
  ],
  source: {
    github: 'view-launcher/vue-view-launcher',
    npm: '@view-launcher/rollup-plugin-vue',
  },
  links: {
    github: 'https://github.com/view-launcher/vue-view-launcher',
    npm: 'https://www.npmjs.com/package/@view-launcher/rollup-plugin-vue',
    website: 'https://github.com/view-launcher/vue-view-launcher/master/packages/rollup-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 8,
    },
  },
})
