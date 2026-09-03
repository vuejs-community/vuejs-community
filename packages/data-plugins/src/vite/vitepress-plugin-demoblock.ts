import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-demoblock',
  description: 'A vite plugin that helps vitepress generate vue component code blocks.',
  version: '1.0.10',
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
  links: {
    github: 'https://github.com/LorexIQ/vitepress-plugin-demoblock',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-demoblock',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 2,
    },
  },
})
