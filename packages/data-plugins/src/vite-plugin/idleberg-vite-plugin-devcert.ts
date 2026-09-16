import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@idleberg/vite-plugin-devcert',
  description: 'A Vite plugin to generate trusted SSL/TLS certificates for local development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'certificate',
    'https',
    'ssl',
    'tls',
  ],
  source: {
    github: 'idleberg/vite-plugin-devcert',
    npm: '@idleberg/vite-plugin-devcert',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-devcert',
    npm: 'https://www.npmjs.com/package/@idleberg/vite-plugin-devcert',
    website: 'https://github.com/idleberg/vite-plugin-devcert#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 1169,
      weekly: 193,
    },
  },
})
