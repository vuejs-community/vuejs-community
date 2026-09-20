import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-react-static',
  description: 'Static-site generation for React 18+ with Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'ssr',
    'react',
    'react-ssg',
  ],
  links: {
    github: 'https://github.com/jayzoou/vite-react-static',
    npm: 'https://www.npmjs.com/package/vite-react-static',
    website: 'https://github.com/jayzoou/vite-react-static',
  },
  source: {
    github: 'jayzoou/vite-react-static',
    npm: 'vite-react-static',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
