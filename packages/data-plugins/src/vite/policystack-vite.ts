import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@policystack/vite',
  description: 'Vite plugin that scans source files for @policystack/sdk collecting()/thirdParty() calls and populates the auto-collected registry at build time',
  version: '1.5.0',
  category: 'plugin',
  tags: [
    'policystack',
    'privacy-policy',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/policystack',
    npm: 'https://www.npmjs.com/package/@policystack/vite',
  },
  stats: {
    downloads: {
      monthly: 1431,
      weekly: 246,
    },
  },
})
