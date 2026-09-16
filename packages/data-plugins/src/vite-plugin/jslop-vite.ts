import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jslop/vite',
  description: 'Vite plugin for JSlop. Compiles .jslop modules, provides the dev SSR middleware, exposes virtual route/client entries, and wires the two-pass production build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'jslop',
    'vite',
    'vite-plugin',
    'ssr',
    'framework',
  ],
  source: {
    github: 'p-arndt/jslop',
    npm: '@jslop/vite',
  },
  links: {
    github: 'https://github.com/p-arndt/jslop',
    npm: 'https://www.npmjs.com/package/@jslop/vite',
    website: 'https://github.com/p-arndt/jslop#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
