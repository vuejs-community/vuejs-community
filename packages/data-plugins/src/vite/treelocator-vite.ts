import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@treelocator/vite',
  description: 'Vite plugin for TreeLocatorJS - auto-injects runtime in dev mode',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'treelocatorjs',
    'locatorjs',
    'vite',
    'vite-plugin',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wende/treelocatorjs',
    npm: 'https://www.npmjs.com/package/@treelocator/vite',
  },
  stats: {
    downloads: {
      monthly: 88,
      weekly: 9,
    },
  },
})
