import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-denolint',
  description: 'A Rollup plugin to lint entry points and all imported files with denolint.',
  version: '1.2.4',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'eslint',
    'denolint',
    'deno-lint',
    'deno',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-denolint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-denolint',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 2,
    },
  },
})
