import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minimize',
  description: 'A Rollup plugin to bundle with a minimize with checksum with md5 digest',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'minimize',
    'checksum',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/allex/rollup-plugin-minimize',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minimize',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 9,
    },
  },
})
