import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'styleenv',
  description: 'Environment-tinted favicons for Next.js and Vite — see at a glance whether a tab is dev, preview, staging, or production.',
  version: '1.1.0',
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
    github: 'https://github.com/Erasmus001/envstyle',
    npm: 'https://www.npmjs.com/package/styleenv',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 5,
    },
  },
})
