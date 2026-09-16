import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-copy',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for copying files during the build process.',
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
    'copy',
    'assets',
    'static-assets',
  ],
  source: {
    github: 'jsxtools/rollup-utils',
    npm: '@jsxtools/rollup-plugin-copy',
  },
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-copy',
    website: 'https://github.com/jsxtools/rollup-utils/tree/main/packages/rollup-plugin-copy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 139,
      weekly: 24,
    },
  },
})
