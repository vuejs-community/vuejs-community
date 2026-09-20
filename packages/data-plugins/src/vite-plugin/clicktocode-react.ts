import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@clicktocode/react',
  description: 'Click an element in your running React app and hand it to a coding agent — element picker + OpenCode bridge.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devtools',
    'element-picker',
    'coding-agent',
    'opencode',
    'ai',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aminarshadinia/clicktocode',
    npm: 'https://www.npmjs.com/package/@clicktocode/react',
    website: 'https://github.com/aminarshadinia/clicktocode/tree/main/packages/react#readme',
  },
  source: {
    github: 'aminarshadinia/clicktocode',
    npm: '@clicktocode/react',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 57,
      weekly: 4,
    },
  },
})
