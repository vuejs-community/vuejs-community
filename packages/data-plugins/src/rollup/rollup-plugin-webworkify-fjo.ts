import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webworkify-fjo',
  description: 'Bundles web worker alongside your main.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'augusttty/rollup-plugin-webworkify',
    npm: 'rollup-plugin-webworkify-fjo',
  },
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
