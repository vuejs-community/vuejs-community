import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dtwo/unplugin-ast',
  description: 'Manipulate the AST to transform your code.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'wite',
    'esbuild',
    'webpack',
  ],
  links: {
    github: 'https://github.com/kdjs-dev/unplugin-ast',
    npm: 'https://www.npmjs.com/package/@dtwo/unplugin-ast',
    website: 'https://github.com/kdjs-dev/unplugin-ast#readme',
  },
  source: {
    github: 'kdjs-dev/unplugin-ast',
    npm: '@dtwo/unplugin-ast',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
