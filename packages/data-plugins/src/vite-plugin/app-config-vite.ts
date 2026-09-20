import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@app-config/vite',
  description: 'Vite plugin for @app-config',
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
    npm: 'https://www.npmjs.com/package/@app-config/vite',
    website: 'https://github.com/launchcodedev/app-config#readme',
  },
  source: {
    github: 'launchcodedev/app-config',
    npm: '@app-config/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1151,
      weekly: 97,
    },
  },
})
