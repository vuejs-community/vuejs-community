import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zenv-sh/vite-plugin',
  description: 'Vite plugin for zEnv — build-time secret injection with zero-knowledge encryption',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'secrets',
    'zero-knowledge',
    'encryption',
    'environment-variables',
    'zenv',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Judeadeniji/zenv-sh',
    npm: 'https://www.npmjs.com/package/@zenv-sh/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
