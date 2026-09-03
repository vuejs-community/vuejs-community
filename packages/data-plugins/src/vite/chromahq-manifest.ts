import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chromahq/manifest',
  description: 'Manifest generation and build tooling for Chroma Chrome extensions',
  version: '1.0.70',
  category: 'plugin',
  tags: [
    'chrome-extension',
    'browser-extension',
    'manifest',
    'build-tools',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chromaHQ/chroma',
    npm: 'https://www.npmjs.com/package/@chromahq/manifest',
  },
  stats: {
    downloads: {
      monthly: 1043,
      weekly: 376,
    },
  },
})
