import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dtwo/unplugin-ast',
  description: 'Manipulate the AST to transform your code.',
  version: '0.5.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'wite',
    'esbuild',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/kdjs-dev/unplugin-ast',
    npm: 'https://www.npmjs.com/package/@dtwo/unplugin-ast',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
