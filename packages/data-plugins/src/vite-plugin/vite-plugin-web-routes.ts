import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-web-routes',
  description: 'Vite plugin that generates React Router v6 routes from your filesystem. Place files named PAGE.tsx, LAYOUT.tsx, BOUNDARY.tsx or ERROR.tsx and get a fully typed routes.ts with zero manual configuration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/yracnet/vite-plugin-web-routes',
    npm: 'https://www.npmjs.com/package/vite-plugin-web-routes',
    website: 'https://github.com/yracnet/vite-plugin-web-routes#readme',
  },
  source: {
    github: 'yracnet/vite-plugin-web-routes',
    npm: 'vite-plugin-web-routes',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
