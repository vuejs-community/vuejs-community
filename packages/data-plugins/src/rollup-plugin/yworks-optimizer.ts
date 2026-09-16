import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yworks/optimizer',
  description: 'yFiles for HTML optimization and obfuscation tool',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'yFiles',
    'yfiles-for-html',
    'yfiles-js',
    'rollup-plugin',
    'rolldown-plugin',
    'webpack-plugin',
    'plugin',
    'optimizer',
    'obfuscation',
    'minifier',
  ],
  source: {
    npm: '@yworks/optimizer',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@yworks/optimizer',
    website: 'https://www.yfiles.com/the-yfiles-sdk/web/yfiles-for-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6539,
      weekly: 826,
    },
  },
})
