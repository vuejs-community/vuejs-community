import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-safe-env',
  description: 'A Vite plugin that prevents server-only environment variables from leaking into client-side bundles.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'bundle',
    'dotenv',
    'env',
    'environment-variables',
    'leak',
    'process-env',
    'secret',
    'security',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chicong065/vite-plugin-safe-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-safe-env',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 13,
    },
  },
})
