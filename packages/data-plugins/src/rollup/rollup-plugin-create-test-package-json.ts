import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-create-test-package-json',
  description: 'Creates a package.json for testing the pack file of your package, adds in required dependencies.',
  icon: 'logos:rollupjs',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'package-test',
    'plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'toolbuilder/rollup-plugin-create-test-package-json',
    npm: 'rollup-plugin-create-test-package-json',
  },
  links: {
    github: 'https://github.com/toolbuilder/rollup-plugin-create-test-package-json',
    npm: 'https://www.npmjs.com/package/rollup-plugin-create-test-package-json',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 9,
    },
  },
})
