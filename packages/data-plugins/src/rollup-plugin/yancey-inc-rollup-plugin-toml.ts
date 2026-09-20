import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yancey-inc/rollup-plugin-toml',
  description: 'Convert .toml files to ES6 modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'toml',
  ],
  links: {
    github: 'https://github.com/YanceyOfficial/rollup-plugin-toml',
    npm: 'https://www.npmjs.com/package/@yancey-inc/rollup-plugin-toml',
    website: 'https://github.com/YanceyOfficial/rollup-plugin-toml#readme',
  },
  source: {
    github: 'YanceyOfficial/rollup-plugin-toml',
    npm: '@yancey-inc/rollup-plugin-toml',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 35,
      weekly: 14,
    },
  },
})
