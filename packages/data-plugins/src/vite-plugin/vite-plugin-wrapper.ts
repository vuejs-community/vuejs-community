import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wrapper',
  description: 'A Vite plugin for transparently wrapping matched modules with custom implementations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wrapper',
    'module-wrapper',
    'virtual-module',
    'rollup',
    'bundler',
    'esm',
  ],
  source: {
    github: 'magne4000/vite-plugin-wrapper',
    npm: 'vite-plugin-wrapper',
  },
  links: {
    github: 'https://github.com/magne4000/vite-plugin-wrapper',
    npm: 'https://www.npmjs.com/package/vite-plugin-wrapper',
    website: 'https://github.com/magne4000/vite-plugin-wrapper#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 140518,
      weekly: 26625,
    },
  },
})
