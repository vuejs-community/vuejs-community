import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-web-routes',
  description: 'Vite plugin that generates React Router v6 routes from your filesystem. Place files named PAGE.tsx, LAYOUT.tsx, BOUNDARY.tsx or ERROR.tsx and get a fully typed routes.ts with zero manual configuration.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'react-router',
    'react-router-v6',
    'filesystem-routing',
    'file-based-routing',
    'routing',
    'pages',
    'layout',
    'error-boundary',
    'lazy-loading',
    'code-splitting',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yracnet/vite-plugin-web-routes',
    npm: 'https://www.npmjs.com/package/vite-plugin-web-routes',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 0,
    },
  },
})
