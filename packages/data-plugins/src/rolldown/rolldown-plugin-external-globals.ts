import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-external-globals',
  description: 'Transform external imports into global variables for Rolldown. A Rust/oxc port of rollup-plugin-external-globals that reuses Rolldown\'s own AST tooling instead of re-parsing in JS.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rolldown',
    'rolldown-plugin',
    'rollup-plugin',
    'external-globals',
    'oxc',
    'rust',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/rayinfinite/rolldown-plugin-external-globals',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-external-globals',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
