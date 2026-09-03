import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@o.z/vite-plugin-swc',
  description: 'A high-performance Vite plugin that transforms TypeScript and JavaScript files using SWC for lightning-fast builds',
  version: '0.19.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'swc',
    'typescript',
    'javascript',
    'transformer',
    'compiler',
    'build',
    'rollup',
    'rollup-plugin',
    'decorators',
    'top-level-await',
    'fast',
    'performance',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/z-npm/vite-plugin-swc',
    npm: 'https://www.npmjs.com/package/@o.z/vite-plugin-swc',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
