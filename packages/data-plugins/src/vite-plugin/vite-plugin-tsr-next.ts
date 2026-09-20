import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsr-next',
  description: 'File-based routing plugin for TanStack Router with Next.js App Router conventions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tanstack-router',
    'file-based-routing',
    'react-router',
  ],
  links: {
    github: 'https://github.com/sontie/vite-plugin-tsr-next',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsr-next',
    website: 'https://github.com/sontie/vite-plugin-tsr-next#readme',
  },
  source: {
    github: 'sontie/vite-plugin-tsr-next',
    npm: 'vite-plugin-tsr-next',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
