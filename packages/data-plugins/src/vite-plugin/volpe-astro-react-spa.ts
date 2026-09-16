import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@volpe/astro-react-spa',
  description: 'Vite plugin for file-based routing with React Router in Astro',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'astro',
    'react',
    'react-router',
    'spa',
    'file-based-routing',
  ],
  source: {
    npm: '@volpe/astro-react-spa',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@volpe/astro-react-spa',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
