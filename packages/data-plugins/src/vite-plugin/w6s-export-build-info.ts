import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@w6s/export-build-info',
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
  source: {
    github: 'WorkPlusFE/vite-plugin-export-build-info',
    npm: '@w6s/export-build-info',
  },
  links: {
    github: 'https://github.com/WorkPlusFE/vite-plugin-export-build-info',
    npm: 'https://www.npmjs.com/package/@w6s/export-build-info',
    website: 'https://github.com/WorkPlusFE/vite-plugin-export-build-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 7,
    },
  },
})
