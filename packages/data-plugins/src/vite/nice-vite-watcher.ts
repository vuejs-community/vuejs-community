import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nice-vite-watcher',
  description: 'Vite plugin for hot-reloading symlinked npm packages. Watches dist folders and triggers browser reload when linked packages rebuild.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'hot-reload',
    'symlink',
    'toolkit',
    'linked-packages',
    'monorepo',
    'local-dependencies',
    'watch',
    'development',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/niceprototypes/nice-vite-watcher',
    npm: 'https://www.npmjs.com/package/nice-vite-watcher',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
