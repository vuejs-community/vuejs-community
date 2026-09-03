import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-tsc-resolve',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for resolving TypeScript module paths using the TypeScript Compiler API.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rolldown',
    'rolldown-plugin',
    'vite',
    'vite-plugin',
    'typescript',
    'tsconfig',
    'paths',
    'module-resolution',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-tsc-resolve',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
