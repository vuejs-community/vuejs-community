import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@app-config/rollup',
  description: 'Rollup plugin that resolves @app-config for you',
  version: '2.9.0-beta.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/launchcodedev/app-config',
    npm: 'https://www.npmjs.com/package/@app-config/rollup',
  },
  stats: {
    downloads: {
      monthly: 992,
      weekly: 294,
    },
  },
})
