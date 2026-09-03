import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-feedback',
  description: 'Visual annotation tool for React + Vite — click any component, write feedback, copy structured output for LLMs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'feedback',
    'devtools',
    'annotation',
    'llm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jozef/vite-plugin-react-feedback',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-feedback',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
