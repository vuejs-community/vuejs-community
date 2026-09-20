import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-copied',
  description: 'Copy files && directories with rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'assets',
    'copy',
  ],
  links: {
    github: 'https://github.com/sakitam-fdd/rollup-plugin-copied',
    npm: 'https://www.npmjs.com/package/rollup-plugin-copied',
    website: 'https://github.com/sakitam-fdd/rollup-plugin-copied#README',
  },
  source: {
    github: 'sakitam-fdd/rollup-plugin-copied',
    npm: 'rollup-plugin-copied',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 26,
      weekly: 8,
    },
  },
})
