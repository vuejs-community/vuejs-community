import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-ssr-react',
  description: 'Vite utility for server-side rendering React apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
    'react',
  ],
  source: {
    github: 'dchenk/vite-ssr',
    npm: 'vite-ssr-react',
  },
  links: {
    github: 'https://github.com/dchenk/vite-ssr',
    npm: 'https://www.npmjs.com/package/vite-ssr-react',
    website: 'https://github.com/dchenk/vite-ssr#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
