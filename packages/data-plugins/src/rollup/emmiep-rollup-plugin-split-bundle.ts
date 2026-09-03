import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@emmiep/rollup-plugin-split-bundle',
  description: 'An experimental bundle splitter plugin for Rollup',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'bundle splitting',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/emmiep/rollup-plugin-split-bundle',
    npm: 'https://www.npmjs.com/package/@emmiep/rollup-plugin-split-bundle',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 7,
    },
  },
})
