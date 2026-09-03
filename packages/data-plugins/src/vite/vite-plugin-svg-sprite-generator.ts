import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sprite-generator',
  description: 'A fast, zero-dependency SVG sprite generator for Vite 5–8+ and Node.js >= 18.5. Supports single/folders modes, watch reloading, and smart attribute inheritance.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'svg-sprite',
    'sprite-generator',
    'zero-dependencies',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tavigos/vite-plugin-svg-sprite-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sprite-generator',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
