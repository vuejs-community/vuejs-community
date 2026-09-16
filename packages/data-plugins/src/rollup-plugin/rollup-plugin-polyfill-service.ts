import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-polyfill-service',
  description: 'Rollup plugin that analyse built javascript files and generate a polyfill.io URL based on all features that are being used',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'polyfill',
    'polyfill.io',
    'es',
  ],
  source: {
    github: 'touchifyapp/rollup-plugin-polyfill-service',
    npm: 'rollup-plugin-polyfill-service',
  },
  links: {
    github: 'https://github.com/touchifyapp/rollup-plugin-polyfill-service',
    npm: 'https://www.npmjs.com/package/rollup-plugin-polyfill-service',
    website: 'https://github.com/touchifyapp/rollup-plugin-polyfill-service#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
