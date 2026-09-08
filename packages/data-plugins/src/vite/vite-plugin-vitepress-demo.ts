import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vitepress-demo',
  description: 'A vite plugin for vitepress code block demo.',
  icon: 'logos:vite-icon',
  version: '2.2.1',
  category: 'plugin',
  tags: [
    'vitepress',
    'markdown',
    'vite',
    'vite-plugin',
    'vitepress-code-block-demo',
    'vitepress-demo',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'aibayanyu20/vite-plugins',
    npm: 'vite-plugin-vitepress-demo',
  },
  links: {
    github: 'https://github.com/aibayanyu20/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-vitepress-demo',
  },
  stats: {
    downloads: {
      monthly: 928,
      weekly: 138,
    },
  },
})
