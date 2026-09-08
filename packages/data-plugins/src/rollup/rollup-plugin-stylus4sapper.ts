import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus4sapper',
  description: 'A rollup plugin to compile stylus for sapper',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'EickeOe/rollup-plugin-stylus4sapper',
    npm: 'rollup-plugin-stylus4sapper',
  },
  links: {
    github: 'https://github.com/EickeOe/rollup-plugin-stylus4sapper',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus4sapper',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
