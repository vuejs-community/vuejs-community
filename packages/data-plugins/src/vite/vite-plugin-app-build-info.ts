import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-app-build-info',
  description: 'Inject app build metadata into Vite bundles, HTML, and version.json.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'build-info',
    'version',
    'metadata',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-app-build-info',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 0,
    },
  },
})
