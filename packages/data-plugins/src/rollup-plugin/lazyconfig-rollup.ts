import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lazyconfig/rollup',
  description: 'Declarative, format-aware Rollup configuration with opt-in pre-configured plugins.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'ruben-omh/lazyconfig',
    npm: '@lazyconfig/rollup',
  },
  links: {
    github: 'https://github.com/ruben-omh/lazyconfig',
    npm: 'https://www.npmjs.com/package/@lazyconfig/rollup',
    website: 'https://github.com/ruben-omh/lazyconfig/tree/main/packages/rollup#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 198,
      weekly: 7,
    },
  },
})
