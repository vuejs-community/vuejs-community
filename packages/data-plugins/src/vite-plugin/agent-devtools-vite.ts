import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agent-devtools/vite',
  description: 'Vite plugin for agent-devtools — auto-spawn agent server + dev-only widget injection (Vite 5+)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agent-devtools',
    'devtools',
    'vite',
    'vite-plugin',
    'claude',
    'llm',
    'dev-only',
  ],
  source: {
    github: 'Seungwoo321/agent-devtools',
    npm: '@agent-devtools/vite',
  },
  links: {
    github: 'https://github.com/Seungwoo321/agent-devtools',
    npm: 'https://www.npmjs.com/package/@agent-devtools/vite',
    website: 'https://github.com/Seungwoo321/agent-devtools/tree/main/packages/vite#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 6839,
      weekly: 4080,
    },
  },
})
