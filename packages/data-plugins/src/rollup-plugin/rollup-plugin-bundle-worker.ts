import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-worker',
  description: 'Bundles Worker code alongside your main code',
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
    github: 'https://github.com/andyearnshaw/rollup-plugin-bundle-worker',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-worker',
    website: 'https://github.com/andyearnshaw/rollup-plugin-bundle-worker#readme',
  },
  source: {
    github: 'andyearnshaw/rollup-plugin-bundle-worker',
    npm: 'rollup-plugin-bundle-worker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 100,
      weekly: 25,
    },
  },
})
