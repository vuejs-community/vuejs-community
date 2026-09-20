import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webworkify-fjo',
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
    github: 'https://github.com/augusttty/rollup-plugin-webworkify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-webworkify-fjo',
    website: 'https://github.com/augusttty/rollup-plugin-webworkify#readme',
  },
  source: {
    github: 'augusttty/rollup-plugin-webworkify',
    npm: 'rollup-plugin-webworkify-fjo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
