import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rollup',
  description: 'Inline rollup bundles for Web Workers and such.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'meh/rollup-plugin-svg-store',
    npm: 'rollup-plugin-rollup',
  },
  links: {
    github: 'https://github.com/meh/rollup-plugin-svg-store',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rollup',
    website: 'https://github.com/meh/rollup-plugin-rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
