import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ast',
  description: 'Manipulate the AST to transform your code.',
  icon: 'icon:dark-unplugin',
  version: '0.19.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'unplugin/unplugin-ast',
    npm: 'unplugin-ast',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-ast',
    npm: 'https://www.npmjs.com/package/unplugin-ast',
  },
  stats: {
    downloads: {
      monthly: 365273,
      weekly: 98891,
    },
  },
})
