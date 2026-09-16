import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
  description: 'A simple plugin that hoists any named exports in the entry file to the global scope (i.e. outside the IIFE/UMD/similar scope)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'google-apps-script',
  ],
  source: {
    github: 'jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
    npm: '@jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
  },
  links: {
    github: 'https://github.com/jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
    npm: 'https://www.npmjs.com/package/@jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope',
    website: 'https://github.com/jo12bar/rollup-plugin-hoist-entry-exports-to-global-scope#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
