import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hbsidom',
  description: 'A Rollup plugin for transforming handlebars templates to incremental-dom.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'es2015',
    'handlebars',
    'hbs',
    'template',
    'incremental-dom',
    'idom',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ahumphreys87/rollup-plugin-hbsidom',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hbsidom',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
