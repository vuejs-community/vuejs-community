import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gace/vaac',
  description: 'Vibe as a Code - AI-powered code generation at build time',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'code-generation',
    'typescript',
    'openrouter',
    'llm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gace-ai/vaac',
    npm: 'https://www.npmjs.com/package/@gace/vaac',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 7,
    },
  },
})
