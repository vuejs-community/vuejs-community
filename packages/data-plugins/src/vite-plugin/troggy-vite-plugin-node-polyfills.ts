import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@troggy/vite-plugin-node-polyfills',
  description: 'A Vite plugin to polyfill Node\'s Core Modules for browser environments.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'node',
    'node-core-modules',
    'node-polyfills',
    'node-stdlib',
    'polyfills',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'davidmyersdev/vite-plugin-node-polyfills',
    npm: '@troggy/vite-plugin-node-polyfills',
  },
  links: {
    github: 'https://github.com/davidmyersdev/vite-plugin-node-polyfills',
    npm: 'https://www.npmjs.com/package/@troggy/vite-plugin-node-polyfills',
    website: 'https://github.com/davidmyersdev/vite-plugin-node-polyfills',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 65,
      weekly: 10,
    },
  },
})
