import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent-tail',
  description: 'Vite plugin for agent-tail — pipes browser console logs to files on disk during development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'browser-logs',
    'console',
    'logging',
  ],
  source: {
    github: 'gillkyle/agent-tail',
    npm: 'vite-plugin-agent-tail',
  },
  links: {
    github: 'https://github.com/gillkyle/agent-tail',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent-tail',
    website: 'https://github.com/gillkyle/agent-tail#readme',
  },
  stats: {
    stars: 91,
    downloads: {
      monthly: 69782,
      weekly: 11560,
    },
  },
})
