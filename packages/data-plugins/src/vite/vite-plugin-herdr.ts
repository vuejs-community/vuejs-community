import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-herdr',
  description: 'Pick a DOM element in your Vite app and send it, with a prompt, to a coding agent running in herdr.',
  icon: '',
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
