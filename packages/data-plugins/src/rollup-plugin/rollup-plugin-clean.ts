import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-clean',
  description: 'Clean the dest directory before rebuilding.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'clean',
  ],
  links: {
    github: 'https://github.com/alwaysonlinetxm/rollup-plugin-clean',
    npm: 'https://www.npmjs.com/package/rollup-plugin-clean',
    website: 'https://github.com/alwaysonlinetxm/rollup-plugin-clean#readme',
  },
  source: {
    github: 'alwaysonlinetxm/rollup-plugin-clean',
    npm: 'rollup-plugin-clean',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 1256,
      weekly: 334,
    },
  },
})
