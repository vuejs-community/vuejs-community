import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ast',
  description: 'Manipulate the AST to transform your code.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  source: {
    github: 'unplugin/unplugin-ast',
    npm: 'unplugin-ast',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-ast',
    npm: 'https://www.npmjs.com/package/unplugin-ast',
    website: 'https://github.com/unplugin/unplugin-ast#readme',
  },
  stats: {
    stars: 100,
    downloads: {
      monthly: 328085,
      weekly: 60830,
    },
  },
})
