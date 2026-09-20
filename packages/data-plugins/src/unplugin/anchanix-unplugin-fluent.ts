import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@anchanix/unplugin-fluent',
  description: 'Plugin for Vite and other bundlers to easily import [project fluent](https://projectfluent.org/) bundles.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/smc13/unplugin-fluent',
    npm: 'https://www.npmjs.com/package/@anchanix/unplugin-fluent',
    website: 'https://github.com/smc13/unplugin-fluent#readme',
  },
  source: {
    github: 'smc13/unplugin-fluent',
    npm: '@anchanix/unplugin-fluent',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
