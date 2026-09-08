import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-polyfills-vite8',
  description: 'A Vite plugin to polyfill Node\'s Core Modules for browser environments.',
  icon: 'logos:vite-icon',
  version: '0.25.4',
  category: 'plugin',
  tags: [
    'node',
    'node-core-modules',
    'node-polyfills',
    'node-stdlib',
    'polyfills',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'davidmyersdev/vite-plugin-node-polyfills',
    npm: 'vite-plugin-node-polyfills-vite8',
  },
  links: {
    github: 'https://github.com/davidmyersdev/vite-plugin-node-polyfills',
    npm: 'https://www.npmjs.com/package/vite-plugin-node-polyfills-vite8',
  },
  stats: {
    downloads: {
      monthly: 1269,
      weekly: 489,
    },
  },
})
