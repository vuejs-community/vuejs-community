import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-utils',
  description: 'A collection of utilities for authoring Rollup, Rolldown, and Vite-compatible plugins.',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rolldown',
    'rolldown-plugin',
    'vite',
    'vite-plugin',
    'plugin-utils',
    'build-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-utils',
  },
  stats: {
    downloads: {
      monthly: 168,
      weekly: 31,
    },
  },
})
