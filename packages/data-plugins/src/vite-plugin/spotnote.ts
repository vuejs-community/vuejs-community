import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'spotnote',
  description: 'Click a UI element in your Vite dev server, write a note, and copy an AI-agent-ready prompt with the exact source location.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'ai',
    'coding-agent',
    'mcp',
    'claude-code',
    'react',
    'vue',
    'svelte',
    'solid',
    'astro',
    'devtools',
  ],
  links: {
    github: 'https://github.com/harukikuri/spotnote',
    npm: 'https://www.npmjs.com/package/spotnote',
    website: 'https://spotnote-weld.vercel.app',
  },
  source: {
    github: 'harukikuri/spotnote',
    npm: 'spotnote',
  },
})
