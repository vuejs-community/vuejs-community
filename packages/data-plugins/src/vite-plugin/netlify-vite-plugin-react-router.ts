import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@netlify/vite-plugin-react-router',
  description: 'React Router 7+ Vite plugin for Netlify',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react-router',
    'vite-plugin',
    'netlify',
  ],
  links: {
    github: 'https://github.com/netlify/remix-compute',
    npm: 'https://www.npmjs.com/package/@netlify/vite-plugin-react-router',
    website: 'https://github.com/netlify/remix-compute#readme',
  },
  source: {
    github: 'netlify/remix-compute',
    npm: '@netlify/vite-plugin-react-router',
  },
  stats: {
    stars: 36,
    downloads: {
      monthly: 84747,
      weekly: 11947,
    },
  },
})
