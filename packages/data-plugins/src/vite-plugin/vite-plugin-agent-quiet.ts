import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent-quiet',
  description: 'Pause Vite\'s HMR during AI-agent edit bursts. Coalesce many edits into one reload.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'claude-code',
    'cursor',
    'aider',
    'ai-agent',
    'developer-experience',
  ],
  links: {
    github: 'https://github.com/ichiragshah/vite-plugin-agent-quiet',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent-quiet',
    website: 'https://github.com/ichiragshah/vite-plugin-agent-quiet#readme',
  },
  source: {
    github: 'ichiragshah/vite-plugin-agent-quiet',
    npm: 'vite-plugin-agent-quiet',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 74,
      weekly: 6,
    },
  },
})
