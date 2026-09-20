import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pincushion-vite',
  description: 'Vite plugin that auto-injects the Pincushion feedback widget on dev and preview builds — anyone can pin your running app, your AI coding agent fixes it via MCP.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'pincushion',
    'feedback',
    'visual-feedback',
    'annotations',
    'mcp',
    'ai-agents',
    'review',
  ],
  links: {
    github: 'https://github.com/jcooley8/pincushion',
    npm: 'https://www.npmjs.com/package/pincushion-vite',
    website: 'https://pincushion.io/for/vite',
  },
  source: {
    github: 'jcooley8/pincushion',
    npm: 'pincushion-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 159,
      weekly: 137,
    },
  },
})
