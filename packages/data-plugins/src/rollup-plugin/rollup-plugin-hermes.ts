import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hermes',
  description: 'Rollup plugin to compile code using hermesc',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'Aliucord/rollup-plugin-hermes',
    npm: 'rollup-plugin-hermes',
  },
  links: {
    github: 'https://github.com/Aliucord/rollup-plugin-hermes',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hermes',
    website: 'https://github.com/Aliucord/rollup-plugin-hermes#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 44,
      weekly: 4,
    },
  },
})
