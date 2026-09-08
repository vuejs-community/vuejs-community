import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-handlebars-compiler',
  description: 'Rollup plugin to compile Handlebars templates to JavaScript with partials, helpers, assets, and Handlebars compile options.',
  icon: 'logos:rollupjs',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'handlebars',
    'hbs',
    'template',
    'partials',
    'helpers',
    'precompile',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'JohannIsaac/rollup-plugin-handlebars-compiler',
    npm: 'rollup-plugin-handlebars-compiler',
  },
  links: {
    github: 'https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-handlebars-compiler',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 7,
    },
  },
})
