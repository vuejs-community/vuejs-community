import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@k8ordo/server',
  description: 'Runs a k8ordo application: RSC rendered per request, with Server Actions.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'k8ordo',
    'react',
    'rsc',
    'server',
    'ssr',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/k35o/k8ordo',
    npm: 'https://www.npmjs.com/package/@k8ordo/server',
    website: 'https://ordo.k8o.me',
  },
  source: {
    github: 'k35o/k8ordo',
    npm: '@k8ordo/server',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 8,
    },
  },
})
