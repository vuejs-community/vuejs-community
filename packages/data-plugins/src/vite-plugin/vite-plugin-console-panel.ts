import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console-panel',
  description: 'A Vite plugin that injects a mobile-friendly console/network/elements devtools panel into your dev server — automatically, dev-only, zero file edits to your project.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'devtools',
    'mobile',
    'debug',
    'console',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-console-panel',
  },
  source: {
    npm: 'vite-plugin-console-panel',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 2,
    },
  },
})
