import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jose.donas/vite-plugin-version-manifest',
  description: 'A Vite plugin to generate a version manifest file with build metadata.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version-manifest',
    'build-metadata',
  ],
  source: {
    github: 'jgdonas/vite-plugin-version-manifest',
    npm: '@jose.donas/vite-plugin-version-manifest',
  },
  links: {
    github: 'https://github.com/jgdonas/vite-plugin-version-manifest',
    npm: 'https://www.npmjs.com/package/@jose.donas/vite-plugin-version-manifest',
    website: 'https://github.com/jgdonas/vite-plugin-version-manifest#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
