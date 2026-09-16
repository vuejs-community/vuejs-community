import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'css-but-ai',
  description: 'Vite-first compile-time CSS framework powered by AI prompts in .ass files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'ai',
    'llm',
    'postcss',
  ],
  source: {
    github: 'blake2573/css-but-ai',
    npm: 'css-but-ai',
  },
  links: {
    github: 'https://github.com/blake2573/css-but-ai',
    npm: 'https://www.npmjs.com/package/css-but-ai',
    website: 'https://github.com/blake2573/css-but-ai#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
