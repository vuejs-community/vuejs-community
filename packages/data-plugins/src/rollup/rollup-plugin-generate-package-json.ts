import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-package-json',
  description: 'Generate package.json file with packages from your bundle using Rollup',
  icon: 'logos:rollupjs',
  version: '3.2.0',
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
  source: {
    github: 'vladshcherbin/rollup-plugin-generate-package-json',
    npm: 'rollup-plugin-generate-package-json',
  },
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-generate-package-json',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-package-json',
  },
  stats: {
    downloads: {
      monthly: 209573,
      weekly: 56400,
    },
  },
})
