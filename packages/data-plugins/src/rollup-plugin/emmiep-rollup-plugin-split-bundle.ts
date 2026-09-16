import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@emmiep/rollup-plugin-split-bundle',
  description: 'An experimental bundle splitter plugin for Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bundle splitting',
  ],
  source: {
    github: 'emmiep/rollup-plugin-split-bundle',
    npm: '@emmiep/rollup-plugin-split-bundle',
  },
  links: {
    github: 'https://github.com/emmiep/rollup-plugin-split-bundle',
    npm: 'https://www.npmjs.com/package/@emmiep/rollup-plugin-split-bundle',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
