import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@astrapi69/vite-plugin-build-version',
  description: 'Vite plugin that emits the version.json build manifest and defines the build-time version/hash/date literals consumed by @astrapi69/pwa-update',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'pwa',
    'version',
    'build-info',
    'manifest',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/astrapi69/pwa-update-kit',
    npm: 'https://www.npmjs.com/package/@astrapi69/vite-plugin-build-version',
  },
  stats: {
    downloads: {
      monthly: 204,
      weekly: 30,
    },
  },
})
