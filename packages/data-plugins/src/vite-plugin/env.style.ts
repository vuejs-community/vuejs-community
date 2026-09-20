import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'env.style',
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
    github: 'https://github.com/QuadDepo/env.style',
    npm: 'https://www.npmjs.com/package/env.style',
    website: 'https://github.com/QuadDepo/env.style#readme',
  },
  source: {
    github: 'QuadDepo/env.style',
    npm: 'env.style',
  },
  stats: {
    stars: 225,
    downloads: {
      monthly: 60426,
      weekly: 9908,
    },
  },
})
