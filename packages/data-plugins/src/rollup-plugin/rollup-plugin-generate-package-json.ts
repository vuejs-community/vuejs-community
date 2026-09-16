import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-package-json',
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
    npm: 'rollup-plugin-generate-package-json',
  },
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-generate-package-json',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-package-json',
    website: 'https://github.com/vladshcherbin/rollup-plugin-generate-package-json#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 181643,
      weekly: 36249,
    },
  },
})
