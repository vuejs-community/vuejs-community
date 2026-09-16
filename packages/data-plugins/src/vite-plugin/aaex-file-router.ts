import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'aaex-file-router',
  description: 'A file-based routing system for React projects that automatically generates routes from your file structure. Similar to Next.js App Router or Remix file conventions.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'router',
    'vite-plugin',
  ],
  source: {
    npm: 'aaex-file-router',
  },
  links: {
    npm: 'https://www.npmjs.com/package/aaex-file-router',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 90,
      weekly: 3,
    },
  },
})
