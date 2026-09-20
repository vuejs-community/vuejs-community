import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cloflin/docpilot',
  description: 'A grounded Ask AI panel for any page of any website — VitePress, Docusaurus, Vue, React, or a plain script tag. Hybrid search runs in the browser against a static index you build; a relevance gate, opt-in, can refuse before the model is called.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ask-ai',
    'ai-search',
    'site-search',
    'ai-chatbot',
    'rag',
    'answer-engine',
    'docs-search',
    'docs-chatbot',
    'hybrid-search',
    'chat-widget',
    'embeddable',
    'vitepress',
    'vitepress-plugin',
    'vite-plugin',
    'docusaurus',
    'docusaurus-plugin',
    'vue',
    'react',
    'citations',
    'grounded',
    'self-hosted',
  ],
  links: {
    github: 'https://github.com/Cloflin/docpilot',
    npm: 'https://www.npmjs.com/package/@cloflin/docpilot',
    website: 'https://docpilot-nine.vercel.app',
  },
  source: {
    github: 'Cloflin/docpilot',
    npm: '@cloflin/docpilot',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1517,
      weekly: 215,
    },
  },
})
