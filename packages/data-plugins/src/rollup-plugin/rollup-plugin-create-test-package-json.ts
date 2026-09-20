import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-create-test-package-json',
  description: 'Creates a package.json for testing the pack file of your package, adds in required dependencies.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'package-test',
    'plugin',
  ],
  links: {
    github: 'https://github.com/toolbuilder/rollup-plugin-create-test-package-json',
    npm: 'https://www.npmjs.com/package/rollup-plugin-create-test-package-json',
    website: 'https://github.com/toolbuilder/rollup-plugin-create-test-package-json#readme',
  },
  source: {
    github: 'toolbuilder/rollup-plugin-create-test-package-json',
    npm: 'rollup-plugin-create-test-package-json',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 13,
    },
  },
})
