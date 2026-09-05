import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lgcjs',
  description: 'Rollup plugin for transpiling .xlgc files  + live editor support',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'lgcjs',
    'librogame',
    'librogamesland',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/librogamesland/rollup-plugin-lgcjs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lgcjs',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
