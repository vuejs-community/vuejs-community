import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hermes',
  description: 'Rollup plugin to compile code using hermesc',
  icon: 'logos:rollupjs',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Aliucord/rollup-plugin-hermes',
    npm: 'rollup-plugin-hermes',
  },
  links: {
    github: 'https://github.com/Aliucord/rollup-plugin-hermes',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hermes',
  },
  stats: {
    downloads: {
      monthly: 130,
      weekly: 8,
    },
  },
})
