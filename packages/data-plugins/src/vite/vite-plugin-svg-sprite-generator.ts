import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sprite-generator',
  description: 'A fast, zero-dependency SVG sprite generator for Vite 5–8+ and Node.js >= 18.5. Supports single/folders modes, watch reloading, and smart attribute inheritance.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'tavigos/vite-plugin-svg-sprite-generator',
    npm: 'vite-plugin-svg-sprite-generator',
  },
  links: {
    github: 'https://github.com/tavigos/vite-plugin-svg-sprite-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sprite-generator',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
