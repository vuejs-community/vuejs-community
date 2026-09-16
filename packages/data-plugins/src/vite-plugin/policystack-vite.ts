import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@policystack/vite',
  description: 'Vite plugin that scans source files for @policystack/sdk collecting()/thirdParty() calls and populates the auto-collected registry at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'policystack',
    'privacy-policy',
    'vite-plugin',
  ],
  source: {
    github: 'jamiedavenport/policystack',
    npm: '@policystack/vite',
  },
  links: {
    github: 'https://github.com/jamiedavenport/policystack',
    npm: 'https://www.npmjs.com/package/@policystack/vite',
    website: 'https://github.com/jamiedavenport/policystack#readme',
  },
  stats: {
    stars: 163,
    downloads: {
      monthly: 1263,
      weekly: 43,
    },
  },
})
