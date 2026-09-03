import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lomray/rollup-plugin-generate-package-json-v2',
  description: 'Generate package.json file with packages from your bundle using Rollup',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'generate',
    'package.json',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-generate-package-json',
    npm: 'https://www.npmjs.com/package/@lomray/rollup-plugin-generate-package-json-v2',
  },
  stats: {
    downloads: {
      monthly: 569,
      weekly: 102,
    },
  },
})
