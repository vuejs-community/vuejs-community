import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@react-router/dev',
  description: 'Dev tools and CLI for React Router',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'router',
    'react-router',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'remix-run/react-router',
    npm: '@react-router/dev',
  },
  links: {
    github: 'https://github.com/remix-run/react-router',
    npm: 'https://www.npmjs.com/package/@react-router/dev',
    website: 'https://reactrouter.com',
  },
  stats: {
    stars: 56572,
    downloads: {
      monthly: 8064016,
      weekly: 1704031,
    },
  },
})
