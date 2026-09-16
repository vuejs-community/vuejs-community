import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-denolint',
  description: 'A Rollup plugin to lint entry points and all imported files with denolint.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'prantlf/rollup-plugin-denolint',
    npm: 'rollup-plugin-denolint',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-denolint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-denolint',
    website: 'http://github.com/prantlf/rollup-plugin-denolint/',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
