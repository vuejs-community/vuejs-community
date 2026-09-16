import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sebastianspeitel/rollup-plugin-assemblyscript-loader',
  description: 'A Rollup plugin to import assembly script modules using @assemblyscript/loader.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'assets',
  ],
  source: {
    github: 'SebastianSpeitel/rollup-plugin-assemblyscript-loader',
    npm: '@sebastianspeitel/rollup-plugin-assemblyscript-loader',
  },
  links: {
    github: 'https://github.com/SebastianSpeitel/rollup-plugin-assemblyscript-loader',
    npm: 'https://www.npmjs.com/package/@sebastianspeitel/rollup-plugin-assemblyscript-loader',
    website: 'https://github.com/SebastianSpeitel/rrollup-plugin-assemblyscript-loader#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
