import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kolaby',
  description: 'Pick an element in the browser and send its exact file:line, props and screenshot to your AI coding agent',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'nextjs',
    'react',
    'devtools',
    'mcp',
    'claude-code',
    'ai',
    'element-picker',
    'inspector',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/kolaby',
  },
  source: {
    npm: 'kolaby',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2116,
      weekly: 90,
    },
  },
})
