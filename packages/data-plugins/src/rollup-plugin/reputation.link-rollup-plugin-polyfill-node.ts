import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@reputation.link/rollup-plugin-polyfill-node',
  description: 'Temporary fork of rollup-plugin-polyfill-node package while main package is broken.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'snowpackjs/rollup-plugin-polyfill-node',
    npm: '@reputation.link/rollup-plugin-polyfill-node',
  },
  links: {
    github: 'https://github.com/snowpackjs/rollup-plugin-polyfill-node',
    npm: 'https://www.npmjs.com/package/@reputation.link/rollup-plugin-polyfill-node',
    website: 'https://github.com/snowpackjs/rollup-plugin-polyfill-node#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
