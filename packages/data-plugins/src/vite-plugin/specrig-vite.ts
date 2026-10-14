import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@specrig/vite',
  description: 'specrig for an app built with Vite: the plugin that serves its runtime settings, the checks that every setting it reads is answered, and init.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'playwright',
    'bdd',
    'runtime-config',
    'spec-first',
  ],
  links: {
    github: 'https://github.com/specrig/specrig-js',
    npm: 'https://www.npmjs.com/package/@specrig/vite',
    website: 'https://github.com/specrig/specrig-js#readme',
  },
  source: {
    github: 'specrig/specrig-js',
    npm: '@specrig/vite',
  },
})
