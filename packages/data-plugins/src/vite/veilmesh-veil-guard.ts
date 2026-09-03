import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@veilmesh/veil-guard',
  description: 'Sign web builds with veil-guard: Node.js wrapper and Vite plugin',
  version: '0.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/veilmesh/veil-guard-node',
    npm: 'https://www.npmjs.com/package/@veilmesh/veil-guard',
  },
  stats: {
    downloads: {
      monthly: 181,
      weekly: 16,
    },
  },
})
