import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-pretext',
  description: 'A zero-configuration Vite plugin that measures text off the main thread in a Web Worker (via @chenglou/pretext): reserve height to stop layout shift, shrink-wrap to content width, style by wrapped line count, or read measurements with zero forced layout.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'pretext',
    'vite',
    'vite-plugin',
    'text-layout',
    'text-measurement',
    'line-breaking',
    'typography',
    'canvas',
    'cls',
    'performance',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/BALOTIAS/vite-pretext',
    npm: 'https://www.npmjs.com/package/vite-pretext',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 8,
    },
  },
})
