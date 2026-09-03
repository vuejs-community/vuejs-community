import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'env.style',
  description: 'Environment-tinted favicons for Next.js and Vite — see at a glance whether a tab is dev, preview, staging, or production.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'nextjs',
    'vite',
    'vite-plugin',
    'favicon',
    'environment',
    'dx',
    'staging',
    'preview',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/QuadDepo/env.style',
    npm: 'https://www.npmjs.com/package/env.style',
  },
  stats: {
    downloads: {
      monthly: 60994,
      weekly: 16890,
    },
  },
})
