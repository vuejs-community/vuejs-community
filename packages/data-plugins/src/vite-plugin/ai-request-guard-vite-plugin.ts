import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ai-request-guard/vite-plugin',
  description: 'Vite plugin for AIRequestGuard — real-request interception and schema diff HTML report',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ai-request-guard',
    'anti-corruption-layer',
    'schema-diff',
    'fetch-interceptor',
    'typescript',
  ],
  links: {
    github: 'https://github.com/jipengju-GitHub/ai-request-guard',
    npm: 'https://www.npmjs.com/package/@ai-request-guard/vite-plugin',
    website: 'https://guard.pennji.cn/api/webpack-plugin.html',
  },
  source: {
    github: 'jipengju-GitHub/ai-request-guard',
    npm: '@ai-request-guard/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 117,
      weekly: 2,
    },
  },
})
