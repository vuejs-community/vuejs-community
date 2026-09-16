import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-mfe-host-reloader',
  description: 'Hot-reload bridge for Vite Module Federation hosts and remotes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'module-federation',
    'hmr',
    'microfrontend',
  ],
  source: {
    npm: 'vite-mfe-host-reloader',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-mfe-host-reloader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
