import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-pretext',
  description: 'A zero-configuration Vite plugin that measures text off the main thread in a Web Worker (via @chenglou/pretext): reserve height to stop layout shift, shrink-wrap to content width, style by wrapped line count, or read measurements with zero forced layout.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/BALOTIAS/vite-pretext',
    npm: 'https://www.npmjs.com/package/vite-pretext',
    website: 'https://github.com/BALOTIAS/vite-pretext',
  },
  source: {
    github: 'BALOTIAS/vite-pretext',
    npm: 'vite-pretext',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 37,
      weekly: 4,
    },
  },
})
