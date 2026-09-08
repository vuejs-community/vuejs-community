import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-native',
  description: 'Import native code with Rollup',
  icon: 'logos:rollupjs',
  version: '1.2.16',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'native',
    'napi',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'arlac77/rollup-plugin-native',
    npm: 'rollup-plugin-native',
  },
  links: {
    github: 'https://github.com/arlac77/rollup-plugin-native',
    npm: 'https://www.npmjs.com/package/rollup-plugin-native',
  },
  stats: {
    downloads: {
      monthly: 472,
      weekly: 23,
    },
  },
})
