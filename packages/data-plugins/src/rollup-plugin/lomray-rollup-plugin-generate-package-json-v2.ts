import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lomray/rollup-plugin-generate-package-json-v2',
  description: 'Generate package.json file with packages from your bundle using Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'generate',
    'package.json',
  ],
  source: {
    github: 'vladshcherbin/rollup-plugin-generate-package-json',
    npm: '@lomray/rollup-plugin-generate-package-json-v2',
  },
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-generate-package-json',
    npm: 'https://www.npmjs.com/package/@lomray/rollup-plugin-generate-package-json-v2',
    website: 'https://github.com/vladshcherbin/rollup-plugin-generate-package-json#readme',
  },
  stats: {
    stars: 33,
    downloads: {
      monthly: 505,
      weekly: 97,
    },
  },
})
