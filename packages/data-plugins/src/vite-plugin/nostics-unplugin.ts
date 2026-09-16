import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nostics/unplugin',
  description: 'Build-time plugins for nostics: strip diagnostics from production builds and collect them during dev',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nostics',
    'unplugin',
    'vite-plugin',
    'diagnostics',
  ],
  source: {
    github: 'vercel-labs/nostics',
    npm: '@nostics/unplugin',
  },
  links: {
    github: 'https://github.com/vercel-labs/nostics',
    npm: 'https://www.npmjs.com/package/@nostics/unplugin',
    website: 'https://github.com/vercel-labs/nostics#readme',
  },
  stats: {
    stars: 230,
    downloads: {
      monthly: 3461,
      weekly: 944,
    },
  },
})
