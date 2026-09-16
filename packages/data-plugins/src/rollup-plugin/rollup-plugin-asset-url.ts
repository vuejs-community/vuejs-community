import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-asset-url',
  description: 'fork from rollup-plugin-url and modify something',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'static assets',
  ],
  source: {
    github: 'bigbigbo/rollup-plugin-asset-url',
    npm: 'rollup-plugin-asset-url',
  },
  links: {
    github: 'https://github.com/bigbigbo/rollup-plugin-asset-url',
    npm: 'https://www.npmjs.com/package/rollup-plugin-asset-url',
    website: 'https://github.com/bigbigbo/rollup-plugin-asset-url#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
