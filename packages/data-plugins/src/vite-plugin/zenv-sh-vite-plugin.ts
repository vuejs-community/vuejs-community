import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zenv-sh/vite-plugin',
  description: 'Vite plugin for zEnv — build-time secret injection with zero-knowledge encryption',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'secrets',
    'zero-knowledge',
    'encryption',
    'environment-variables',
    'zenv',
  ],
  links: {
    github: 'https://github.com/Judeadeniji/zenv-sh',
    npm: 'https://www.npmjs.com/package/@zenv-sh/vite-plugin',
    website: 'https://github.com/Judeadeniji/zenv-sh#readme',
  },
  source: {
    github: 'Judeadeniji/zenv-sh',
    npm: '@zenv-sh/vite-plugin',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
