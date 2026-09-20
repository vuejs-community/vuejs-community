import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@helios-lang/rollup-plugin',
  description: 'Rollup plugin that compiles top-level helios validators during bundle time',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/HeliosLang/rollup-plugin',
    npm: 'https://www.npmjs.com/package/@helios-lang/rollup-plugin',
    website: 'https://github.com/HeliosLang/rollup-plugin#readme',
  },
  source: {
    github: 'HeliosLang/rollup-plugin',
    npm: '@helios-lang/rollup-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
