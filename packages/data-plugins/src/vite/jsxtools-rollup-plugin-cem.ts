import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-cem',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for generating a Custom Elements Manifest file from the module graph.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rolldown',
    'rolldown-plugin',
    'vite',
    'vite-plugin',
    'custom-elements',
    'custom-elements-manifest',
    'web-components',
    'cem',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-cem',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 6,
    },
  },
})
