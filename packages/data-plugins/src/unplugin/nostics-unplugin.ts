import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nostics/unplugin',
  description: 'Build-time plugins for nostics: strip diagnostics from production builds and collect them during dev',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'nostics',
    'unplugin',
    'vite-plugin',
    'diagnostics',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/vercel-labs/nostics',
    npm: 'https://www.npmjs.com/package/@nostics/unplugin',
  },
  stats: {
    downloads: {
      monthly: 2954,
      weekly: 1142,
    },
  },
})
