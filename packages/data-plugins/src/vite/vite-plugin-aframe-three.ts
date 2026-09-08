import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aframe-three',
  description: 'Vite plugin to automatically alias three to A-Frame\'s super-three ',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'aframe',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'mrxz/vite-plugin-aframe-three',
    npm: 'vite-plugin-aframe-three',
  },
  links: {
    github: 'https://github.com/mrxz/vite-plugin-aframe-three',
    npm: 'https://www.npmjs.com/package/vite-plugin-aframe-three',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 8,
    },
  },
})
