import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-llm-friendly',
  description: 'Make your Vite site LLM-friendly with Markdown content negotiation and llms.txt support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'llm',
    'llms-txt',
    'markdown',
    'ai',
    'seo',
    'content-negotiation',
  ],
  links: {
    github: 'https://github.com/codeusb/vite-plugin-llm-friendly',
    npm: 'https://www.npmjs.com/package/vite-plugin-llm-friendly',
    website: 'https://github.com/codeusb/vite-plugin-llm-friendly#readme',
  },
  source: {
    github: 'codeusb/vite-plugin-llm-friendly',
    npm: 'vite-plugin-llm-friendly',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
