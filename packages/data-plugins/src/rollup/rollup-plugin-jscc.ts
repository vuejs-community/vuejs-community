import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jscc',
  description: 'Conditional comments and variable replacement for rollup, based on jscc',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'javascript',
    'typescript',
    'es2019',
    'es2015',
    'es6',
    'modules',
    'compilation',
    'preproccesor',
    'jspreproc',
    'jscc',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/aMarCruz/rollup-plugin-jscc',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jscc',
  },
  stats: {
    downloads: {
      monthly: 30456,
      weekly: 8691,
    },
  },
})
