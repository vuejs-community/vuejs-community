import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@app-config/rollup',
  description: 'Rollup plugin that resolves @app-config for you',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/launchcodedev/app-config',
    npm: 'https://www.npmjs.com/package/@app-config/rollup',
    website: 'https://github.com/launchcodedev/app-config#readme',
  },
  source: {
    github: 'launchcodedev/app-config',
    npm: '@app-config/rollup',
  },
  stats: {
    stars: 75,
    downloads: {
      monthly: 1201,
      weekly: 98,
    },
  },
})
