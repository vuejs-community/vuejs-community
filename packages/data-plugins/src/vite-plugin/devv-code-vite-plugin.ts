import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'devv-code-vite-plugin',
  description: 'Vite plugin for Devv Code visual editor integration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devv-code',
    'visual-editor',
  ],
  links: {
    github: 'https://github.com/devvai/devv-code-vite-plugin',
    npm: 'https://www.npmjs.com/package/devv-code-vite-plugin',
    website: 'https://github.com/devvai/devv-code-vite-plugin#readme',
  },
  source: {
    github: 'devvai/devv-code-vite-plugin',
    npm: 'devv-code-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
