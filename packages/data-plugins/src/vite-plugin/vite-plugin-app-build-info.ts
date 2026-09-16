import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-app-build-info',
  description: 'Inject app build metadata into Vite bundles, HTML, and version.json.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build-info',
    'version',
    'metadata',
  ],
  source: {
    npm: 'vite-plugin-app-build-info',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-app-build-info',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
