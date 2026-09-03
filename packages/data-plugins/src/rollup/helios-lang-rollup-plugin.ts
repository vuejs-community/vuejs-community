import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@helios-lang/rollup-plugin',
  description: 'Rollup plugin that compiles top-level helios validators during bundle time',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/HeliosLang/rollup-plugin',
    npm: 'https://www.npmjs.com/package/@helios-lang/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
