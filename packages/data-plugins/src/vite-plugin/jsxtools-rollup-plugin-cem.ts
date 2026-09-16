import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-cem',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for generating a Custom Elements Manifest file from the module graph.',
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
    'custom-elements',
    'custom-elements-manifest',
    'web-components',
    'cem',
  ],
  source: {
    github: 'jsxtools/rollup-utils',
    npm: '@jsxtools/rollup-plugin-cem',
  },
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-cem',
    website: 'https://github.com/jsxtools/rollup-utils/tree/main/packages/rollup-plugin-cem',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 36,
      weekly: 2,
    },
  },
})
