import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@react-perfscope/vite',
  description: 'Vite plugin that auto-mounts react-perfscope in dev.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'performance',
    'profiler',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rayforvideos/react-perfscope',
    npm: 'https://www.npmjs.com/package/@react-perfscope/vite',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 7,
    },
  },
})
