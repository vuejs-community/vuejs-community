import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-herdr',
  description: 'Pick a DOM element in your Vite app and send it, with a prompt, to a coding agent running in herdr.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/scaccogatto/vite-plugin-herdr',
    npm: 'https://www.npmjs.com/package/vite-plugin-herdr',
    website: 'https://github.com/scaccogatto/vite-plugin-herdr#readme',
  },
  source: {
    github: 'scaccogatto/vite-plugin-herdr',
    npm: 'vite-plugin-herdr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 13,
    },
  },
})
