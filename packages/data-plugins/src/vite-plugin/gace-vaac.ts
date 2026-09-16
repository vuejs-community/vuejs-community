import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gace/vaac',
  description: 'Vibe as a Code - AI-powered code generation at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'code-generation',
    'typescript',
    'openrouter',
    'llm',
  ],
  source: {
    github: 'gace-ai/vaac',
    npm: '@gace/vaac',
  },
  links: {
    github: 'https://github.com/gace-ai/vaac',
    npm: 'https://www.npmjs.com/package/@gace/vaac',
    website: 'https://github.com/gace-ai/vaac#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
