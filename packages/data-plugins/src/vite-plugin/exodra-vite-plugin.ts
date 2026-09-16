import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@exodra/vite-plugin',
  description: 'Vite plugin for Exodra - file-based routing, HMR, optimized builds, and Next.js-like developer experience',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'abaikov/exodra',
    npm: '@exodra/vite-plugin',
  },
  links: {
    github: 'https://github.com/abaikov/exodra',
    npm: 'https://www.npmjs.com/package/@exodra/vite-plugin',
    website: 'https://exodra.org',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 43,
      weekly: 2,
    },
  },
})
