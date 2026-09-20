import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'styleenv',
  description: 'Environment-tinted favicons for Next.js and Vite — see at a glance whether a tab is dev, preview, staging, or production.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Erasmus001/envstyle',
    npm: 'https://www.npmjs.com/package/styleenv',
    website: 'https://github.com/Erasmus001/envstyle#readme',
  },
  source: {
    github: 'Erasmus001/envstyle',
    npm: 'styleenv',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
