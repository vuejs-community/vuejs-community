import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'pincushion-vite',
  description: 'Vite plugin that auto-injects the Pincushion feedback widget on dev and preview builds — anyone can pin your running app, your AI coding agent fixes it via MCP.',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jcooley8/pincushion-plugin',
    npm: 'https://www.npmjs.com/package/pincushion-vite',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 8,
    },
  },
})
