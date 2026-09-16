import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@almeidx/version-check-vite',
  description: 'Vite plugin for @almeidx/version-check.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'build-id',
    'deployment',
    'esm',
    'frontend',
    'typescript',
    'update-detector',
    'version-check',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'almeidx/version-check',
    npm: '@almeidx/version-check-vite',
  },
  links: {
    github: 'https://github.com/almeidx/version-check',
    npm: 'https://www.npmjs.com/package/@almeidx/version-check-vite',
    website: 'https://github.com/almeidx/version-check/tree/main/packages/vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 83,
      weekly: 17,
    },
  },
})
