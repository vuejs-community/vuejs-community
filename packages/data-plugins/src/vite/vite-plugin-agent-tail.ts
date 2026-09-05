import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent-tail',
  description: 'Vite plugin for agent-tail — pipes browser console logs to files on disk during development.',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'browser-logs',
    'console',
    'logging',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gillkyle/agent-tail',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent-tail',
  },
  stats: {
    downloads: {
      monthly: 79602,
      weekly: 23518,
    },
  },
})
