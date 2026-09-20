import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-make',
  description: 'Rollup plugin to build dependency files suitable for make',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'make',
  ],
  links: {
    github: 'https://github.com/btmorex/rollup-plugin-make',
    npm: 'https://www.npmjs.com/package/rollup-plugin-make',
    website: 'https://github.com/btmorex/rollup-plugin-make',
  },
  source: {
    github: 'btmorex/rollup-plugin-make',
    npm: 'rollup-plugin-make',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
