import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-safe-env',
  description: 'A Vite plugin that prevents server-only environment variables from leaking into client-side bundles.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/chicong065/vite-plugin-safe-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-safe-env',
    website: 'https://github.com/chicong065/vite-plugin-safe-env#readme',
  },
  source: {
    github: 'chicong065/vite-plugin-safe-env',
    npm: 'vite-plugin-safe-env',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 53,
      weekly: 7,
    },
  },
})
