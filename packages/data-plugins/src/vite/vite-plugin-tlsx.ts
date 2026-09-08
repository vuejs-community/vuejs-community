import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tlsx',
  description: 'A Vite plugin that adds HTTPS support using tlsx.',
  icon: 'logos:vite-icon',
  version: '0.13.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'https',
    'tls',
    'ssl',
    'development',
    'security',
    'vitepress',
    'stacks',
    'typescript',
    'javascript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'stacksjs/tlsx',
    npm: 'vite-plugin-tlsx',
  },
  links: {
    github: 'https://github.com/stacksjs/tlsx',
    npm: 'https://www.npmjs.com/package/vite-plugin-tlsx',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
