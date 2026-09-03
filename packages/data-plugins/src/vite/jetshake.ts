import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'jetshake',
  description: 'Svelte-style optimizing compiler for React 19: standard JSX and hooks in, signals and direct DOM out. In private beta.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'react',
    'compiler',
    'signals',
    'fine-grained-reactivity',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/jetshake',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
