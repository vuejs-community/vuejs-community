import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webworkify',
  description: 'Bundles web worker alongside your main.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'webworker',
    'worker',
  ],
  links: {
    github: 'https://github.com/allex/rollup-plugin-webworkify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-webworkify',
    website: 'https://github.com/allex/rollup-plugin-webworkify#readme',
  },
  source: {
    github: 'allex/rollup-plugin-webworkify',
    npm: 'rollup-plugin-webworkify',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 29,
      weekly: 9,
    },
  },
})
