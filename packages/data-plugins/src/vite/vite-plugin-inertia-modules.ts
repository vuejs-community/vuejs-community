import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inertia-modules',
  description: 'Serve Inertia pages from Composer packages. Build modular Laravel apps where each module ships its own frontend.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'inertia',
    'inertiajs',
    'laravel',
    'composer',
    'modules',
    'modular',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/baconfy/vite-plugin-inertia-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-inertia-modules',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 8,
    },
  },
})
