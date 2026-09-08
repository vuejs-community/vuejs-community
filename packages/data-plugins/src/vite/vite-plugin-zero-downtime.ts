import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zero-downtime',
  description: 'A Vite plugin to enable zero downtime deployments.',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'zero-downtime',
    'deployment',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'HasanQQ/vite-plugin-zero-downtime',
    npm: 'vite-plugin-zero-downtime',
  },
  links: {
    github: 'https://github.com/HasanQQ/vite-plugin-zero-downtime',
    npm: 'https://www.npmjs.com/package/vite-plugin-zero-downtime',
  },
  stats: {
    downloads: {
      monthly: 87,
      weekly: 9,
    },
  },
})
