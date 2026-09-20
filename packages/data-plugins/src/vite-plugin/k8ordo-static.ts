import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@k8ordo/static',
  description: 'Builds a k8ordo application into files: every route rendered ahead of time, no server at run time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'k8ordo',
    'react',
    'rsc',
    'ssg',
    'static-site-generator',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/k35o/k8ordo',
    npm: 'https://www.npmjs.com/package/@k8ordo/static',
    website: 'https://ordo.k8o.me',
  },
  source: {
    github: 'k35o/k8ordo',
    npm: '@k8ordo/static',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 9,
    },
  },
})
