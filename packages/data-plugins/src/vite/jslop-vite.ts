import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jslop/vite',
  description: 'Vite plugin for JSlop. Compiles .jslop modules, provides the dev SSR middleware, exposes virtual route/client entries, and wires the two-pass production build.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'jslop',
    'vite',
    'vite-plugin',
    'ssr',
    'framework',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/p-arndt/jslop',
    npm: 'https://www.npmjs.com/package/@jslop/vite',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
