import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mono',
  description: 'Vite plugin for monorepo - auto-discover local packages and use source code in browser',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'monorepo',
    'workspace',
    'esm',
    'typescript',
    'source-code',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'alamhubb/mono',
    npm: 'vite-plugin-mono',
  },
  links: {
    github: 'https://github.com/alamhubb/mono',
    npm: 'https://www.npmjs.com/package/vite-plugin-mono',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
