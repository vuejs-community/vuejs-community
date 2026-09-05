import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-symlink-watcher',
  description: 'Vite plugin for hot-reloading symlinked npm packages. Watches dist folders and triggers browser reload when linked packages rebuild.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'hot-reload',
    'symlink',
    'npm-link',
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
    github: 'https://github.com/niceprototypes/nice-vite-symlink-watcher',
    npm: 'https://www.npmjs.com/package/vite-plugin-symlink-watcher',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
