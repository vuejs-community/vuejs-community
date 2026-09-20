import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-demoblock',
  description: 'A vite plugin that helps vitepress generate vue component code blocks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'markdown',
    'vite',
    'vite-plugin',
    'vitepress-code-block-demo',
    'vitepress-demo',
  ],
  links: {
    github: 'https://github.com/LorexIQ/vitepress-plugin-demoblock',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-demoblock',
    website: 'https://github.com/LorexIQ/vitepress-plugin-demoblock/#readme',
  },
  source: {
    github: 'LorexIQ/vitepress-plugin-demoblock',
    npm: 'vitepress-plugin-demoblock',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
