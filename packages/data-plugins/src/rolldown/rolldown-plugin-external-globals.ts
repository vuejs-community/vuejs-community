import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-external-globals',
  description: 'Transform external imports into global variables for Rolldown. A Rust/oxc port of rollup-plugin-external-globals that reuses Rolldown\'s own AST tooling instead of re-parsing in JS.',
  icon: 'logos:rolldown-icon',
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
  source: {
    github: 'rayinfinite/rolldown-plugin-external-globals',
    npm: 'rolldown-plugin-external-globals',
  },
  links: {
    github: 'https://github.com/rayinfinite/rolldown-plugin-external-globals',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-external-globals',
  },
  stats: {
    downloads: {
      monthly: 135,
      weekly: 135,
    },
  },
})
