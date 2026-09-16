import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@optate/plugin',
  description: 'Real-time design inspection and editing for your local dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'design',
    'inspect',
    'devtools',
    'css',
    'react',
    'ai',
  ],
  source: {
    github: 'bala-aji/optate',
    npm: '@optate/plugin',
  },
  links: {
    github: 'https://github.com/bala-aji/optate',
    npm: 'https://www.npmjs.com/package/@optate/plugin',
    website: 'https://optate.vercel.app',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6197,
      weekly: 101,
    },
  },
})
