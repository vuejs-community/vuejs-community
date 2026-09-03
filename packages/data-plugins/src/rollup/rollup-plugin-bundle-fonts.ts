import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-fonts',
  description: 'Rollup plugin to download http fonts referenced in css files',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mgreminger/rollup-plugin-bundle-fonts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-fonts',
  },
  stats: {
    downloads: {
      monthly: 422,
      weekly: 79,
    },
  },
})
