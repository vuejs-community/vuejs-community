import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'agent-source-locator',
  description: 'Alt+click any element in your browser and its source location is typed straight into the terminal running your AI agent.',
  version: '0.3.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'vue',
    'devtools',
    'source-location',
    'ai-agent',
    'claude-code',
    'inspector',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Hexi1997/agent-source-locator',
    npm: 'https://www.npmjs.com/package/agent-source-locator',
  },
  stats: {
    downloads: {
      monthly: 363,
      weekly: 50,
    },
  },
})
