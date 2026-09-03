import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@playableintelligence/template-vite',
  description: 'unplugin-based bundler plugin (Vite-first) that emits the template JSON Schema at build time, fails fast on diagnostics, exposes a virtual schema module, and validates inputs in dev.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'playableintelligence',
    'game-template',
    'vite-plugin',
    'unplugin',
    'json-schema',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@playableintelligence/template-vite',
  },
  stats: {
    downloads: {
      monthly: 195,
      weekly: 113,
    },
  },
})
