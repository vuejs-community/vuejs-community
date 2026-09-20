import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@react-perfscope/vite',
  description: 'Vite plugin that auto-mounts react-perfscope in dev.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'performance',
    'profiler',
  ],
  links: {
    github: 'https://github.com/rayforvideos/react-perfscope',
    npm: 'https://www.npmjs.com/package/@react-perfscope/vite',
    website: 'https://github.com/rayforvideos/react-perfscope#readme',
  },
  source: {
    github: 'rayforvideos/react-perfscope',
    npm: '@react-perfscope/vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 39,
      weekly: 2,
    },
  },
})
