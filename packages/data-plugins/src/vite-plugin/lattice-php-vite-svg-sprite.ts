import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lattice-php/vite-svg-sprite',
  description: 'Vite plugin to vendor SVGs from icon packages, build an SVG sprite from folders, and generate a typed module and/or PHP enum of the icon names.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'icons',
  ],
  source: {
    github: 'lattice-php/vite-svg-sprite',
    npm: '@lattice-php/vite-svg-sprite',
  },
  links: {
    github: 'https://github.com/lattice-php/vite-svg-sprite',
    npm: 'https://www.npmjs.com/package/@lattice-php/vite-svg-sprite',
    website: 'https://github.com/lattice-php/vite-svg-sprite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1899,
      weekly: 349,
    },
  },
})
