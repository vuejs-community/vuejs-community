import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-mfe-host-reloader',
  description: 'Hot-reload bridge for Vite Module Federation hosts and remotes',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'module-federation',
    'hmr',
    'microfrontend',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-mfe-host-reloader',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
