import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minimize',
  description: 'A Rollup plugin to bundle with a minimize with checksum with md5 digest',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'allex/rollup-plugin-minimize',
    npm: 'rollup-plugin-minimize',
  },
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
