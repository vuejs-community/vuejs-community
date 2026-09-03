import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@clicktocode/react',
  description: 'Click an element in your running React app and hand it to a coding agent — element picker + OpenCode bridge.',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'devtools',
    'element-picker',
    'coding-agent',
    'opencode',
    'ai',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aminarshadinia/clicktocode',
    npm: 'https://www.npmjs.com/package/@clicktocode/react',
  },
  stats: {
    downloads: {
      monthly: 108,
      weekly: 6,
    },
  },
})
