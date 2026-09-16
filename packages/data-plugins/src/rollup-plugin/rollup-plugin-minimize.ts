import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minimize',
  description: 'A Rollup plugin to bundle with a minimize with checksum with md5 digest',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'minimize',
    'checksum',
  ],
  source: {
    github: 'allex/rollup-plugin-minimize',
    npm: 'rollup-plugin-minimize',
  },
  links: {
    github: 'https://github.com/allex/rollup-plugin-minimize',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minimize',
    website: 'https://github.com/allex/rollup-plugin-minimize#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
