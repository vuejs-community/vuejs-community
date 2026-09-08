import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-wordpress-dependency-extraction',
  description: 'Rollup plugin to eliminate global Wordpress dependencies.',
  icon: 'logos:rollupjs',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'wordpress',
    'dependency',
    'extraction',
    'rollup',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '0zd0/rollup-plugin-wordpress-dependency-extraction',
    npm: 'rollup-plugin-wordpress-dependency-extraction',
  },
  links: {
    github: 'https://github.com/0zd0/rollup-plugin-wordpress-dependency-extraction',
    npm: 'https://www.npmjs.com/package/rollup-plugin-wordpress-dependency-extraction',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 13,
    },
  },
})
