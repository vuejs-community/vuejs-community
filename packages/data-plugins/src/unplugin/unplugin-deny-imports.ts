import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-deny-imports',
  description: 'Deny imports with full import trace support for Vite, Bun, Rollup, webpack, and esbuild',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'nikuscs/unplugin-deny-imports',
    npm: 'unplugin-deny-imports',
  },
  links: {
    github: 'https://github.com/nikuscs/unplugin-deny-imports',
    npm: 'https://www.npmjs.com/package/unplugin-deny-imports',
    website: 'https://github.com/nikuscs/unplugin-deny-imports#readme',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
