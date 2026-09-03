import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@w6s/export-build-info',
  description: 'Automatically export the relevant information of the project after the build, such as git branch, build time, etc.',
  version: '1.0.0-beta.1',
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
    npm: 'https://www.npmjs.com/package/@w6s/export-build-info',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 11,
    },
  },
})
