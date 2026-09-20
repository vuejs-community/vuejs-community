import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chromahq/manifest',
  description: 'Manifest generation and build tooling for Chroma Chrome extensions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'chrome-extension',
    'browser-extension',
    'manifest',
    'build-tools',
    'vite-plugin',
    'typescript',
  ],
  links: {
    github: 'https://github.com/chromaHQ/chroma',
    npm: 'https://www.npmjs.com/package/@chromahq/manifest',
    website: 'https://github.com/chromaHQ/chroma#readme',
  },
  source: {
    github: 'chromaHQ/chroma',
    npm: '@chromahq/manifest',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1006,
      weekly: 20,
    },
  },
})
