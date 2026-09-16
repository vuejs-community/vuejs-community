import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inertia-modules',
  description: 'Serve Inertia pages from Composer packages. Build modular Laravel apps where each module ships its own frontend.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'baconfy/vite-plugin-inertia-modules',
    npm: 'vite-plugin-inertia-modules',
  },
  links: {
    github: 'https://github.com/baconfy/vite-plugin-inertia-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-inertia-modules',
    website: 'https://github.com/baconfy/vite-plugin-inertia-modules#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 2,
    },
  },
})
