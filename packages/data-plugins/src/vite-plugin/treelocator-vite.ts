import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@treelocator/vite',
  description: 'Vite plugin for TreeLocatorJS - auto-injects runtime in dev mode',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'treelocatorjs',
    'locatorjs',
    'vite',
    'vite-plugin',
    'devtools',
  ],
  links: {
    github: 'https://github.com/wende/treelocatorjs',
    npm: 'https://www.npmjs.com/package/@treelocator/vite',
    website: 'https://github.com/wende/treelocatorjs#readme',
  },
  source: {
    github: 'wende/treelocatorjs',
    npm: '@treelocator/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
