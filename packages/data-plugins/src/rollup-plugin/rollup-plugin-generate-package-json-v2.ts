import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-package-json-v2',
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
    github: 'hockor/rollup-plugin-generate-package-json',
    npm: 'rollup-plugin-generate-package-json-v2',
  },
  links: {
    github: 'https://github.com/hockor/rollup-plugin-generate-package-json',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-package-json-v2',
    website: 'https://github.com/hockor/rollup-plugin-generate-package-json#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
