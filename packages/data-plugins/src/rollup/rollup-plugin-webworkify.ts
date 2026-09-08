import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webworkify',
  description: 'Bundles web worker alongside your main.',
  icon: 'logos:rollupjs',
  version: '0.0.4',
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
    github: 'allex/rollup-plugin-webworkify',
    npm: 'rollup-plugin-webworkify',
  },
  links: {
    github: 'https://github.com/allex/rollup-plugin-webworkify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-webworkify',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
