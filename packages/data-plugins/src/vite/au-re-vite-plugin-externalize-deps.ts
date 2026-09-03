import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@au-re/vite-plugin-externalize-deps',
  description: '(Temporary fork of) A configurable Vite plugin to help externalize your dependencies (includes subpaths)',
  version: '0.9.1',
  category: 'plugin',
  tags: [
    'dependencies',
    'dev',
    'utils',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/voracious/vite-plugin-externalize-deps',
    npm: 'https://www.npmjs.com/package/@au-re/vite-plugin-externalize-deps',
  },
  stats: {
    downloads: {
      monthly: 63,
      weekly: 22,
    },
  },
})
