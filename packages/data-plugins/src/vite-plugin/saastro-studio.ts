import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@saastro/studio',
  description: 'Build-time instrumentation for Saastro Studio — Vite plugin + editable helpers for Astro sites managed by Saastro Hub',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro',
    'studio',
    'saastro',
    'vite-plugin',
    'visual-editing',
  ],
  links: {
    github: 'https://github.com/saastro-io/saastro-hub',
    npm: 'https://www.npmjs.com/package/@saastro/studio',
    website: 'https://github.com/saastro-io/saastro-hub/tree/main/packages/studio',
  },
  source: {
    github: 'saastro-io/saastro-hub',
    npm: '@saastro/studio',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 216,
      weekly: 101,
    },
  },
})
