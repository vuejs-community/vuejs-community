import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-copied',
  description: 'Copy files && directories with rollup',
  icon: 'logos:rollupjs',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'assets',
    'copy',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'sakitam-fdd/rollup-plugin-copied',
    npm: 'rollup-plugin-copied',
  },
  links: {
    github: 'https://github.com/sakitam-fdd/rollup-plugin-copied',
    npm: 'https://www.npmjs.com/package/rollup-plugin-copied',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
