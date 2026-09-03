import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@clicktocode/vue',
  description: 'Click an element in your running Vue app and hand it to a coding agent — element picker + OpenCode bridge.',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'vue',
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
    npm: 'https://www.npmjs.com/package/@clicktocode/vue',
  },
  stats: {
    downloads: {
      monthly: 94,
      weekly: 4,
    },
  },
})
