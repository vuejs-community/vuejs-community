import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lazyconfig/rollup',
  description: 'Declarative, format-aware Rollup configuration with opt-in pre-configured plugins.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-config',
    'rollup-plugin',
    'bundler',
    'build',
    'typescript',
    'babel',
    'lazyconfig',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ruben-omh/lazyconfig',
    npm: 'https://www.npmjs.com/package/@lazyconfig/rollup',
  },
  stats: {
    downloads: {
      monthly: 179,
      weekly: 161,
    },
  },
})
