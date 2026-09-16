import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jsxtools/rollup-plugin-tsc-resolve',
  description: 'A Rollup, Rolldown, and Vite-compatible plugin for resolving TypeScript module paths using the TypeScript Compiler API.',
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
    'tsconfig',
    'paths',
    'module-resolution',
  ],
  source: {
    github: 'jsxtools/rollup-utils',
    npm: '@jsxtools/rollup-plugin-tsc-resolve',
  },
  links: {
    github: 'https://github.com/jsxtools/rollup-utils',
    npm: 'https://www.npmjs.com/package/@jsxtools/rollup-plugin-tsc-resolve',
    website: 'https://github.com/jsxtools/rollup-utils/tree/main/packages/rollup-plugin-tsc-resolve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
