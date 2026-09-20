import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-external-globals',
  description: 'Transform external imports into global variables for Rolldown. A Rust/oxc port of rollup-plugin-external-globals that reuses Rolldown\'s own AST tooling instead of re-parsing in JS.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'rolldown',
    'rolldown-plugin',
    'rollup-plugin',
    'external-globals',
    'oxc',
    'rust',
  ],
  links: {
    github: 'https://github.com/rayinfinite/rolldown-plugin-external-globals',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-external-globals',
    website: 'https://github.com/rayinfinite/rolldown-plugin-external-globals#readme',
  },
  source: {
    github: 'rayinfinite/rolldown-plugin-external-globals',
    npm: 'rolldown-plugin-external-globals',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 148,
      weekly: 6,
    },
  },
})
