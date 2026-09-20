import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@astrapi69/vite-plugin-build-version',
  description: 'Vite plugin that emits the version.json build manifest and defines the build-time version/hash/date literals consumed by @astrapi69/pwa-update',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pwa',
    'version',
    'build-info',
    'manifest',
  ],
  links: {
    github: 'https://github.com/astrapi69/pwa-update-kit',
    npm: 'https://www.npmjs.com/package/@astrapi69/vite-plugin-build-version',
    website: 'https://github.com/astrapi69/pwa-update-kit#readme',
  },
  source: {
    github: 'astrapi69/pwa-update-kit',
    npm: '@astrapi69/vite-plugin-build-version',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 198,
      weekly: 53,
    },
  },
})
