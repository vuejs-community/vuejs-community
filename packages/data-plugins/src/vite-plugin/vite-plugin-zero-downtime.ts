import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zero-downtime',
  description: 'A Vite plugin to enable zero downtime deployments.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zero-downtime',
    'deployment',
  ],
  source: {
    github: 'HasanQQ/vite-plugin-zero-downtime',
    npm: 'vite-plugin-zero-downtime',
  },
  links: {
    github: 'https://github.com/HasanQQ/vite-plugin-zero-downtime',
    npm: 'https://www.npmjs.com/package/vite-plugin-zero-downtime',
    website: 'https://github.com/HasanQQ/vite-plugin-zero-downtime#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 84,
      weekly: 1,
    },
  },
})
