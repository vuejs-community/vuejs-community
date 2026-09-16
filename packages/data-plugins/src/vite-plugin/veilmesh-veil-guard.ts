import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@veilmesh/veil-guard',
  description: 'Sign web builds with veil-guard: Node.js wrapper and Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'security',
    'integrity',
    'attestation',
    'sri',
    'csp',
    'slsa',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'veilmesh/veil-guard-node',
    npm: '@veilmesh/veil-guard',
  },
  links: {
    github: 'https://github.com/veilmesh/veil-guard-node',
    npm: 'https://www.npmjs.com/package/@veilmesh/veil-guard',
    website: 'https://github.com/veilmesh/veil-guard-node#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 194,
      weekly: 6,
    },
  },
})
