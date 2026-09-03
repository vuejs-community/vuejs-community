import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@anchanix/unplugin-fluent',
  description: 'Plugin for Vite and other bundlers to easily import [project fluent](https://projectfluent.org/) bundles.',
  version: '0.1.0-beta.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/smc13/unplugin-fluent',
    npm: 'https://www.npmjs.com/package/@anchanix/unplugin-fluent',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
