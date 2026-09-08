import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-handlebars',
  description: 'A Rollup plugin for transforming handlebars templates to js.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'es2015',
    'handlebars',
    'hbs',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jibhaine/rollup-plugin-handlebars',
    npm: 'rollup-plugin-handlebars',
  },
  links: {
    github: 'https://github.com/jibhaine/rollup-plugin-handlebars',
    npm: 'https://www.npmjs.com/package/rollup-plugin-handlebars',
  },
  stats: {
    downloads: {
      monthly: 384,
      weekly: 48,
    },
  },
})
