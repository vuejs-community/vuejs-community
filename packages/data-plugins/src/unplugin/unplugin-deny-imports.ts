import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-deny-imports',
  description: 'Deny imports with full import trace support for Vite, Bun, Rollup, webpack, and esbuild',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'bun',
    'rollup',
    'webpack',
    'esbuild',
    'deny-imports',
    'import-trace',
    'server-only',
    'client-only',
    'ssr',
    'tanstack-start',
    'tanstack-router',
    'remix',
    'react-router',
    'use-server',
    'use-client',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/nikuscs/unplugin-deny-imports',
    npm: 'https://www.npmjs.com/package/unplugin-deny-imports',
  },
  stats: {
    downloads: {
      monthly: 73,
      weekly: 7,
    },
  },
})
