import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sebastianspeitel/rollup-plugin-assets',
  description: 'A Rollup plugin to import non-javascript assets.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'assets',
  ],
  links: {
    github: 'https://github.com/SebastianSpeitel/rollup-plugin-assets',
    npm: 'https://www.npmjs.com/package/@sebastianspeitel/rollup-plugin-assets',
    website: 'https://github.com/SebastianSpeitel/rollup-plugin-assets#readme',
  },
  source: {
    github: 'SebastianSpeitel/rollup-plugin-assets',
    npm: '@sebastianspeitel/rollup-plugin-assets',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
