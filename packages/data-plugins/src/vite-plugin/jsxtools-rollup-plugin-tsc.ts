import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-tsc',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for compiling TypeScript files with the TypeScript Compiler API.',
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
    'typescript',
    'tsc',
    'declarations',
    'incremental',
  ],
  source: {
    github: 'jsxtools/rollup-utils',
    npm: '@jsxtools/rollup-plugin-tsc',
  },
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-tsc',
    website: 'https://github.com/jsxtools/rollup-utils/tree/main/packages/rollup-plugin-tsc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 44,
      weekly: 3,
    },
  },
})
