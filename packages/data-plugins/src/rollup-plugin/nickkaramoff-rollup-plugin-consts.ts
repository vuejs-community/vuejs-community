import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nickkaramoff/rollup-plugin-consts',
  description: 'Import build time constants with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'const',
    'consts',
    'constant',
  ],
  links: {
    github: 'https://github.com/NickKaramoff/rollup-plugin-consts',
    npm: 'https://www.npmjs.com/package/@nickkaramoff/rollup-plugin-consts',
    website: 'https://github.com/NickKaramoff/rollup-plugin-consts#readme',
  },
  source: {
    github: 'NickKaramoff/rollup-plugin-consts',
    npm: '@nickkaramoff/rollup-plugin-consts',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
