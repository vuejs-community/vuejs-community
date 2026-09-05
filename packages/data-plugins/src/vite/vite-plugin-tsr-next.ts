import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsr-next',
  description: 'File-based routing plugin for TanStack Router with Next.js App Router conventions',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tanstack-router',
    'file-based-routing',
    'react-router',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sontie/vite-plugin-tsr-next',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsr-next',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
