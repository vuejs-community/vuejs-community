import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jscc2',
  description: 'Conditional comments and variable replacement for rollup, based on jscc',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'aMarCruz/rollup-plugin-jscc',
    npm: 'rollup-plugin-jscc2',
  },
  links: {
    github: 'https://github.com/aMarCruz/rollup-plugin-jscc',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jscc2',
    website: 'https://github.com/aMarCruz/rollup-plugin-jscc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
