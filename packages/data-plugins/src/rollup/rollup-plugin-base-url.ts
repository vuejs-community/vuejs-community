import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-base-url',
  description: 'Rollup Plugin for serving imports from a chosen base URL such as /',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'base-url',
    'prerender',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kim366/rollup-plugin-base-url',
    npm: 'https://www.npmjs.com/package/rollup-plugin-base-url',
  },
  stats: {
    downloads: {
      monthly: 755,
      weekly: 203,
    },
  },
})
