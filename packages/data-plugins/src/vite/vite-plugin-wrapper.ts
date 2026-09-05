import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wrapper',
  description: 'A Vite plugin for transparently wrapping matched modules with custom implementations.',
  version: '0.1.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/magne4000/vite-plugin-wrapper',
    npm: 'https://www.npmjs.com/package/vite-plugin-wrapper',
  },
  stats: {
    downloads: {
      monthly: 136760,
      weekly: 43619,
    },
  },
})
