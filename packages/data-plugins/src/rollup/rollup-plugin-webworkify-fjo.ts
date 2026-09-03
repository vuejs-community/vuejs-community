import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webworkify-fjo',
  description: 'Bundles web worker alongside your main.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'webworker',
    'worker',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/augusttty/rollup-plugin-webworkify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-webworkify-fjo',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
