import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hbsidom',
  description: 'A Rollup plugin for transforming handlebars templates to incremental-dom.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'es2015',
    'handlebars',
    'hbs',
    'template',
    'incremental-dom',
    'idom',
  ],
  links: {
    github: 'https://github.com/ahumphreys87/rollup-plugin-hbsidom',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hbsidom',
    website: 'https://github.com/ahumphreys87/rollup-plugin-hbsidom#readme',
  },
  source: {
    github: 'ahumphreys87/rollup-plugin-hbsidom',
    npm: 'rollup-plugin-hbsidom',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
