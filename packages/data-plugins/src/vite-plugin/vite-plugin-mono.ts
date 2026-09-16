import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mono',
  description: 'Vite plugin for monorepo - auto-discover local packages and use source code in browser',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'monorepo',
    'workspace',
    'esm',
    'typescript',
    'source-code',
  ],
  source: {
    github: 'alamhubb/mono',
    npm: 'vite-plugin-mono',
  },
  links: {
    github: 'https://github.com/alamhubb/mono',
    npm: 'https://www.npmjs.com/package/vite-plugin-mono',
    website: 'https://github.com/alamhubb/mono/tree/main/vite-plugin-mono#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
