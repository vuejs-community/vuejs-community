import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jscc2',
  description: 'Conditional comments and variable replacement for rollup, based on jscc',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'javascript',
    'typescript',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-jscc2',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
