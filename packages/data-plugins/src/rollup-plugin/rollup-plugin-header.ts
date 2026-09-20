import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-header',
  description: 'Rollup plugin to append content before or after js bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'banner',
    'header',
    'footer',
    'license',
  ],
  links: {
    github: 'https://github.com/tinysets/rollup-plugin-header',
    npm: 'https://www.npmjs.com/package/rollup-plugin-header',
    website: 'https://github.com/tinysets/rollup-plugin-header',
  },
  source: {
    github: 'tinysets/rollup-plugin-header',
    npm: 'rollup-plugin-header',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
