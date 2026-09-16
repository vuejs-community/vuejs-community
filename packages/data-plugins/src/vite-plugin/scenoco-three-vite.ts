import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@scenoco-three/vite',
  description: 'Vite plugin for SceNoCo XML scene bundling',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'three',
    'threejs',
    'vite',
    'vite-plugin',
    'scene',
    'components',
    'gamedev',
  ],
  source: {
    github: 'RomaRogov/scenoco-three',
    npm: '@scenoco-three/vite',
  },
  links: {
    github: 'https://github.com/RomaRogov/scenoco-three',
    npm: 'https://www.npmjs.com/package/@scenoco-three/vite',
    website: 'https://github.com/RomaRogov/scenoco-three/tree/main/packages/vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 559,
      weekly: 40,
    },
  },
})
