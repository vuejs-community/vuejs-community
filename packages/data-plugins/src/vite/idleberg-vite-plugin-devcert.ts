import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@idleberg/vite-plugin-devcert',
  description: 'A Vite plugin to generate trusted SSL/TLS certificates for local development',
  version: '0.5.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'certificate',
    'https',
    'ssl',
    'tls',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/idleberg/vite-plugin-devcert',
    npm: 'https://www.npmjs.com/package/@idleberg/vite-plugin-devcert',
  },
  stats: {
    downloads: {
      monthly: 1072,
      weekly: 243,
    },
  },
})
