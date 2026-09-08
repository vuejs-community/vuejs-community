import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jscc',
  description: 'Conditional comments and variable replacement for rollup, based on jscc',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'aMarCruz/rollup-plugin-jscc',
    npm: 'rollup-plugin-jscc',
  },
  links: {
    github: 'https://github.com/aMarCruz/rollup-plugin-jscc',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jscc',
  },
  stats: {
    downloads: {
      monthly: 32717,
      weekly: 7761,
    },
  },
})
