import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-utils',
  description: 'A collection of utilities for authoring Rollup, Rolldown, and Vite-compatible plugins.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'jsxtools/rollup-utils',
    npm: '@jsxtools/rollup-plugin-utils',
  },
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-utils',
    website: 'https://github.com/jsxtools/rollup-utils/tree/main/packages/rollup-plugin-utils',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 132,
      weekly: 27,
    },
  },
})
