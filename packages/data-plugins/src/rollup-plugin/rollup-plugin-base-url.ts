import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-base-url',
  description: 'Rollup Plugin for serving imports from a chosen base URL such as /',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'base-url',
    'prerender',
  ],
  source: {
    github: 'kim366/rollup-plugin-base-url',
    npm: 'rollup-plugin-base-url',
  },
  links: {
    github: 'https://github.com/kim366/rollup-plugin-base-url',
    npm: 'https://www.npmjs.com/package/rollup-plugin-base-url',
    website: 'https://github.com/kim366/rollup-plugin-base-url#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 574,
      weekly: 111,
    },
  },
})
