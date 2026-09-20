import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-feedback',
  description: 'Visual annotation tool for React + Vite — click any component, write feedback, copy structured output for LLMs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'feedback',
    'devtools',
    'annotation',
    'llm',
  ],
  links: {
    github: 'https://github.com/jozef/vite-plugin-react-feedback',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-feedback',
    website: 'https://github.com/jozef/vite-plugin-react-feedback#readme',
  },
  source: {
    github: 'jozef/vite-plugin-react-feedback',
    npm: 'vite-plugin-react-feedback',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
