import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zntc/vite-plugin',
  description: 'Use ZNTC as the TypeScript/JSX transformer in Vite (replaces esbuild)',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'esbuild',
    'jsx',
    'swc',
    'transpiler',
    'typescript',
    'vite',
    'vite-plugin',
    'zntc',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ohah/zntc',
    npm: 'https://www.npmjs.com/package/@zntc/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 6,
    },
  },
})
