import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@saastro/studio',
  description: 'Build-time instrumentation for Saastro Studio — Vite plugin + editable helpers for Astro sites managed by Saastro Hub',
  version: '0.10.1',
  category: 'plugin',
  tags: [
    'astro',
    'studio',
    'saastro',
    'vite-plugin',
    'visual-editing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/saastro-io/saastro-hub',
    npm: 'https://www.npmjs.com/package/@saastro/studio',
  },
  stats: {
    downloads: {
      monthly: 307,
      weekly: 52,
    },
  },
})
