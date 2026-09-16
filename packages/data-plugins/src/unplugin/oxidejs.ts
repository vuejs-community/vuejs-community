import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'oxidejs',
  description: 'Vite/Rsbuild plugin. One build → dist/server.js + optional client. Server actions via *.server.ts.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'cloudflare',
    'rsbuild',
    'server-actions',
    'typescript',
    'unplugin',
    'vite',
  ],
  source: {
    github: 'ryuzcorp/oxide',
    npm: 'oxidejs',
  },
  links: {
    github: 'https://github.com/ryuzcorp/oxide',
    npm: 'https://www.npmjs.com/package/oxidejs',
    website: 'https://github.com/ryuzcorp/oxide/tree/main/packages/oxidejs#readme',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 3134,
      weekly: 682,
    },
  },
})
