import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-refresh',
  description: 'Enhances the Vite dev server by adding dependencies to the watcher, and optionally doing full page reloads on changes.',
  icon: 'logos:vite-icon',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'vitejs',
    'reload',
    'refresh',
    'hmr',
    'dependencies',
    'watch',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Shakeskeyboarde/vite-plugin-refresh',
    npm: 'vite-plugin-refresh',
  },
  links: {
    github: 'https://github.com/Shakeskeyboarde/vite-plugin-refresh',
    npm: 'https://www.npmjs.com/package/vite-plugin-refresh',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
