import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-effect',
  description: 'Vite plugin for Effect v4 — type-safe backend API & RPC gateway with virtual client module',
  icon: 'logos:vite-icon',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'effect',
    'effect-ts',
    'effect api',
    'rpc',
    'fullstack',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'osuki-dev/vite-plugin-effect',
    npm: 'vite-plugin-effect',
  },
  links: {
    github: 'https://github.com/osuki-dev/vite-plugin-effect',
    npm: 'https://www.npmjs.com/package/vite-plugin-effect',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 10,
    },
  },
})
