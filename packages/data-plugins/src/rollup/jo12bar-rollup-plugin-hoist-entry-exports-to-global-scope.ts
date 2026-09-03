import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
  description: 'A simple plugin that hoists any named exports in the entry file to the global scope (i.e. outside the IIFE/UMD/similar scope)',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'google-apps-script',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
    npm: 'https://www.npmjs.com/package/@jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
