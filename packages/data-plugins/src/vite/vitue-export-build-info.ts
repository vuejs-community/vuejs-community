import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vitue/export-build-info',
  description: 'Automatically export the relevant information of the project after the build, such as git branch, build time, etc.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'workplusfe',
    'export-build-info',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/WorkPlusFE/vite-plugin-export-build-info',
    npm: 'https://www.npmjs.com/package/@vitue/export-build-info',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 10,
    },
  },
})
