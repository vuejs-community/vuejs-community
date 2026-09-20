import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@clicktocode/vue',
  description: 'Click an element in your running Vue app and hand it to a coding agent — element picker + OpenCode bridge.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'devtools',
    'element-picker',
    'coding-agent',
    'opencode',
    'ai',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aminarshadinia/clicktocode',
    npm: 'https://www.npmjs.com/package/@clicktocode/vue',
    website: 'https://github.com/aminarshadinia/clicktocode/tree/main/packages/vue#readme',
  },
  source: {
    github: 'aminarshadinia/clicktocode',
    npm: '@clicktocode/vue',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 62,
      weekly: 6,
    },
  },
})
