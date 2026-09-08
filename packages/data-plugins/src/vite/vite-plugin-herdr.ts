import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-herdr',
  description: 'Pick a DOM element in your Vite app and send it, with a prompt, to a coding agent running in herdr.',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'herdr',
    'claude-code',
    'coding-agent',
    'dom',
    'element-picker',
    'devtools',
    'ai',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'scaccogatto/vite-plugin-herdr',
    npm: 'vite-plugin-herdr',
  },
  links: {
    github: 'https://github.com/scaccogatto/vite-plugin-herdr',
    npm: 'https://www.npmjs.com/package/vite-plugin-herdr',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
