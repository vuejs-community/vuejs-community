import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@exodra/vite-plugin',
  description: 'Vite plugin for Exodra - file-based routing, HMR, optimized builds, and Next.js-like developer experience',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'exodra',
    'vite',
    'vite-plugin',
    'hmr',
    'hot-reload',
    'file-based-routing',
    'nextjs',
    'dev-server',
    'build-tool',
    'bundler',
    'typescript',
    'jsx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/abaikov/exodra',
    npm: 'https://www.npmjs.com/package/@exodra/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 19,
    },
  },
})
