import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rag-chatbot-plugin',
  description: 'Drop-in AI chatbot for any website: embeddable widget + built-in RAG backend (PDF folder + OpenAI) + enquiry/booking email notifications. Works with Next.js, Vite, Express, or standalone.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'chatbot',
    'rag',
    'openai',
    'pdf',
    'widget',
    'vite-plugin',
    'nextjs',
    'lead-capture',
  ],
  links: {
    github: 'https://github.com/acetrumtech/rag-chatbot-plugin',
    npm: 'https://www.npmjs.com/package/rag-chatbot-plugin',
    website: 'https://acetrum.com',
  },
  source: {
    github: 'acetrumtech/rag-chatbot-plugin',
    npm: 'rag-chatbot-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2086,
      weekly: 43,
    },
  },
})
