import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rag-chatbot-plugin',
  description: 'Drop-in AI chatbot for any website: embeddable widget + built-in RAG backend (PDF folder + OpenAI) + enquiry/booking email notifications. Works with Next.js, Vite, Express, or standalone.',
  version: '1.1.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/acetrumtech/rag-chatbot-plugin',
    npm: 'https://www.npmjs.com/package/rag-chatbot-plugin',
  },
  stats: {
    downloads: {
      monthly: 3729,
      weekly: 92,
    },
  },
})
