import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nice-vite-watcher',
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
    'toolkit',
    'linked-packages',
    'monorepo',
    'local-dependencies',
    'watch',
    'development',
  ],
  source: {
    github: 'niceprototypes/nice-vite-watcher',
    npm: 'nice-vite-watcher',
  },
  links: {
    github: 'https://github.com/niceprototypes/nice-vite-watcher',
    npm: 'https://www.npmjs.com/package/nice-vite-watcher',
    website: 'https://github.com/niceprototypes/nice-vite-watcher#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 5,
    },
  },
})
