import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-native',
  description: 'Import native code with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'native',
    'napi',
  ],
  source: {
    github: 'arlac77/rollup-plugin-native',
    npm: 'rollup-plugin-native',
  },
  links: {
    github: 'https://github.com/arlac77/rollup-plugin-native',
    npm: 'https://www.npmjs.com/package/rollup-plugin-native',
    website: 'https://github.com/arlac77/rollup-plugin-native#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 317,
      weekly: 10,
    },
  },
})
