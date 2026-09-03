import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'kolaby',
  description: 'Pick an element in the browser and send its exact file:line, props and screenshot to your AI coding agent',
  version: '0.4.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/kolaby',
  },
  stats: {
    downloads: {
      monthly: 988,
      weekly: 988,
    },
  },
})
