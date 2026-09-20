import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aframe-three',
  description: 'Vite plugin to automatically alias three to A-Frame\'s super-three ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'aframe',
  ],
  links: {
    github: 'https://github.com/mrxz/vite-plugin-aframe-three',
    npm: 'https://www.npmjs.com/package/vite-plugin-aframe-three',
    website: 'https://github.com/mrxz/vite-plugin-aframe-three#readme',
  },
  source: {
    github: 'mrxz/vite-plugin-aframe-three',
    npm: 'vite-plugin-aframe-three',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
