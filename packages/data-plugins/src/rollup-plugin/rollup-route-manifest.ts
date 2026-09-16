import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-route-manifest',
  description: 'A Rollup plugin to generate an asset manifest, keyed by route patterns!',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'route',
    'manifest',
    'code-split',
    'route-manifest',
    'rollup-plugin',
    'rollup',
  ],
  source: {
    github: 'lukeed/rollup-route-manifest',
    npm: 'rollup-route-manifest',
  },
  links: {
    github: 'https://github.com/lukeed/rollup-route-manifest',
    npm: 'https://www.npmjs.com/package/rollup-route-manifest',
    website: 'https://github.com/lukeed/rollup-route-manifest#readme',
  },
  stats: {
    stars: 42,
    downloads: {
      monthly: 8386,
      weekly: 1992,
    },
  },
})
