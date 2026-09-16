import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fenixengine/rollup-plugin-jscc',
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
    'es2019',
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
    npm: '@fenixengine/rollup-plugin-jscc',
  },
  links: {
    github: 'https://github.com/aMarCruz/rollup-plugin-jscc',
    npm: 'https://www.npmjs.com/package/@fenixengine/rollup-plugin-jscc',
    website: 'https://github.com/aMarCruz/rollup-plugin-jscc',
  },
  stats: {
    stars: 60,
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
