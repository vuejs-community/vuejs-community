import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-symlink-watcher',
  description: 'Vite plugin for hot-reloading symlinked npm packages. Watches dist folders and triggers browser reload when linked packages rebuild.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'niceprototypes/nice-vite-symlink-watcher',
    npm: 'vite-plugin-symlink-watcher',
  },
  links: {
    github: 'https://github.com/niceprototypes/nice-vite-symlink-watcher',
    npm: 'https://www.npmjs.com/package/vite-plugin-symlink-watcher',
    website: 'https://github.com/niceprototypes/nice-vite-symlink-watcher#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
