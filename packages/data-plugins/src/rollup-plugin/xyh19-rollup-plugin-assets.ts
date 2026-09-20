import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xyh19/rollup-plugin-assets',
  description: 'Rollup plugin to rebase, inline assets referenced from the JavaScript code.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'asset',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@xyh19/rollup-plugin-assets',
    website: 'https://gitee.com/xxXyh1908/rollup-plugin-assets/#readme',
  },
  source: {
    npm: '@xyh19/rollup-plugin-assets',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
