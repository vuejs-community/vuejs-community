import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zntc/vite-plugin',
  description: 'Use ZNTC as the TypeScript/JSX transformer in Vite (replaces esbuild)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'ohah/zntc',
    npm: '@zntc/vite-plugin',
  },
  links: {
    github: 'https://github.com/ohah/zntc',
    npm: 'https://www.npmjs.com/package/@zntc/vite-plugin',
    website: 'https://ohah.github.io/zntc',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 361,
      weekly: 318,
    },
  },
})
