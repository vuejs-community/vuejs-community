import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxtagentic',
  description: 'Markdown agents and typed tools with streaming runs, useAgent() and a DevTools tab.',
  icon: 'icon:nuxtagentic',
  category: 'nuxt',
  types: [
    'AI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/dennisadriaans/nuxt-agentic-oss',
    npm: 'https://npmjs.com/package/@nuxtagentic/nuxt',
    website: 'https://nuxtagentic.com/docs/getting-started/free',
  },
  source: {
    github: 'dennisadriaans/nuxt-agentic-oss',
    npm: '@nuxtagentic/nuxt',
  },
})
