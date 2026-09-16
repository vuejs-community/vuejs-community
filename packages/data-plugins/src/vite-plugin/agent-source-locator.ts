import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'agent-source-locator',
  description: 'Alt+click any element in your browser and its source location is typed straight into the terminal running your AI agent.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Hexi1997/agent-source-locator',
    npm: 'agent-source-locator',
  },
  links: {
    github: 'https://github.com/Hexi1997/agent-source-locator',
    npm: 'https://www.npmjs.com/package/agent-source-locator',
    website: 'https://github.com/Hexi1997/agent-source-locator#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 218,
      weekly: 44,
    },
  },
})
