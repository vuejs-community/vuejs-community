import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tlsx',
  description: 'A Vite plugin that adds HTTPS support using tlsx.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'stacksjs/tlsx',
    npm: 'vite-plugin-tlsx',
  },
  links: {
    github: 'https://github.com/stacksjs/tlsx',
    npm: 'https://www.npmjs.com/package/vite-plugin-tlsx',
    website: 'https://github.com/stacksjs/tlsx',
  },
  stats: {
    stars: 47,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
