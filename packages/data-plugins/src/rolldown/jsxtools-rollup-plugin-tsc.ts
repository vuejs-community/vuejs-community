import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-tsc',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for compiling TypeScript files with the TypeScript Compiler API.',
  version: '0.6.0',
  category: 'plugin',
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
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-tsc',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 7,
    },
  },
})
