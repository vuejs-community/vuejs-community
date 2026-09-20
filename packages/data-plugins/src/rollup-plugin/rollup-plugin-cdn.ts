import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cdn',
  description: 'Resolves CDN with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'cdn',
  ],
  links: {
    github: 'https://github.com/WebReflection/rollup-plugin-cdn',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cdn',
    website: 'https://github.com/WebReflection/rollup-plugin-aliar#readme',
  },
  source: {
    github: 'WebReflection/rollup-plugin-cdn',
    npm: 'rollup-plugin-cdn',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 237,
      weekly: 5,
    },
  },
})
