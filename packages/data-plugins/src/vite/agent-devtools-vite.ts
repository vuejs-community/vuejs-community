import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@agent-devtools/vite',
  description: 'Vite plugin for agent-devtools — auto-spawn agent server + dev-only widget injection (Vite 5+)',
  version: '1.3.3',
  category: 'plugin',
  tags: [
    'agent-devtools',
    'devtools',
    'vite',
    'vite-plugin',
    'claude',
    'llm',
    'dev-only',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Seungwoo321/agent-devtools',
    npm: 'https://www.npmjs.com/package/@agent-devtools/vite',
  },
  stats: {
    downloads: {
      monthly: 734,
      weekly: 389,
    },
  },
})
