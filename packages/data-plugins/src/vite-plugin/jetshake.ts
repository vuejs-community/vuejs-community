import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'jetshake',
  description: 'Svelte-style optimizing compiler for React 19: standard JSX and hooks in, signals and direct DOM out. In private beta.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'compiler',
    'signals',
    'fine-grained-reactivity',
    'vite-plugin',
  ],
  source: {
    npm: 'jetshake',
  },
  links: {
    npm: 'https://www.npmjs.com/package/jetshake',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
