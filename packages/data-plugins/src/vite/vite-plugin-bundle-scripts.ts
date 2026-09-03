import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-scripts',
  description: 'Import and bundle Javascript and Typescript files as assets in Vite',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vitejs',
    'plugin',
    'vite-plugin',
    'script',
    'bundle',
    'client',
    'scripts',
    'typescript',
    'javascript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wrapperup/vite-plugin-bundle-scripts',
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-scripts',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
