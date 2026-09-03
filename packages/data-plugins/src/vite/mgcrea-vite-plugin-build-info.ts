import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mgcrea/vite-plugin-build-info',
  description: 'Vite plugin that exposes build information (git commit hash, branch, etc.) as a global variable',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'commit',
    'version',
    'build-info',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mgcrea/vite-plugin-build-info',
    npm: 'https://www.npmjs.com/package/@mgcrea/vite-plugin-build-info',
  },
  stats: {
    downloads: {
      monthly: 290,
      weekly: 218,
    },
  },
})
