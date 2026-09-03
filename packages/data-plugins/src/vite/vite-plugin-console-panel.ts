import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console-panel',
  description: 'A Vite plugin that injects a mobile-friendly console/network/elements devtools panel into your dev server — automatically, dev-only, zero file edits to your project.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'devtools',
    'mobile',
    'debug',
    'console',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-console-panel',
  },
  stats: {
    downloads: {
      monthly: 77,
      weekly: 9,
    },
  },
})
