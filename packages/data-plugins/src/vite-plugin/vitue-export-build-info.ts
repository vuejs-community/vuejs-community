import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitue/export-build-info',
  description: 'Automatically export the relevant information of the project after the build, such as git branch, build time, etc.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'workplusfe',
    'export-build-info',
  ],
  links: {
    github: 'https://github.com/WorkPlusFE/vite-plugin-export-build-info',
    npm: 'https://www.npmjs.com/package/@vitue/export-build-info',
    website: 'https://github.com/WorkPlusFE/vite-plugin-export-build-info#readme',
  },
  source: {
    github: 'WorkPlusFE/vite-plugin-export-build-info',
    npm: '@vitue/export-build-info',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 10,
    },
  },
})
