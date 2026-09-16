import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mgcrea/vite-plugin-build-info',
  description: 'Vite plugin that exposes build information (git commit hash, branch, etc.) as a global variable',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'commit',
    'version',
    'build-info',
  ],
  source: {
    github: 'mgcrea/vite-plugin-build-info',
    npm: '@mgcrea/vite-plugin-build-info',
  },
  links: {
    github: 'https://github.com/mgcrea/vite-plugin-build-info',
    npm: 'https://www.npmjs.com/package/@mgcrea/vite-plugin-build-info',
    website: 'https://github.com/mgcrea/vite-plugin-build-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 300,
      weekly: 19,
    },
  },
})
