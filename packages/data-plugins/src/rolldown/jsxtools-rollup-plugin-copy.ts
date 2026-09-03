import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-copy',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for copying files during the build process.',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rolldown',
    'rolldown-plugin',
    'vite',
    'vite-plugin',
    'copy',
    'assets',
    'static-assets',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-copy',
  },
  stats: {
    downloads: {
      monthly: 174,
      weekly: 30,
    },
  },
})
