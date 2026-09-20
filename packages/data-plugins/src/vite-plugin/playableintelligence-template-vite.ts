import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@playableintelligence/template-vite',
  description: 'unplugin-based bundler plugin (Vite-first) that emits the template JSON Schema at build time, fails fast on diagnostics, exposes a virtual schema module, and validates inputs in dev.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'playableintelligence',
    'game-template',
    'vite-plugin',
    'unplugin',
    'json-schema',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@playableintelligence/template-vite',
  },
  source: {
    npm: '@playableintelligence/template-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 368,
      weekly: 107,
    },
  },
})
