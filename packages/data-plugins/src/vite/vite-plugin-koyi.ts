import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-koyi',
  description: 'Vite plugin for AI-assisted frontend development — live DOM context picker + Claude Code / Anthropic API integration',
  icon: 'logos:vite-icon',
  version: '0.1.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'claude',
    'frontend',
    'developer-tools',
    'dom-inspector',
    'anthropic',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'hentaicracker/vite-plugin-koyi',
    npm: 'vite-plugin-koyi',
  },
  links: {
    github: 'https://github.com/hentaicracker/vite-plugin-koyi',
    npm: 'https://www.npmjs.com/package/vite-plugin-koyi',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
