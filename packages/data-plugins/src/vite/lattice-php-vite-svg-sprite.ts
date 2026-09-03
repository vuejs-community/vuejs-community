import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lattice-php/vite-svg-sprite',
  description: 'Vite plugin to vendor SVGs from icon packages, build an SVG sprite from folders, and generate a typed module and/or PHP enum of the icon names.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'icons',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lattice-php/vite-svg-sprite',
    npm: 'https://www.npmjs.com/package/@lattice-php/vite-svg-sprite',
  },
  stats: {
    downloads: {
      monthly: 2933,
      weekly: 231,
    },
  },
})
