import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@clicktocode/angular',
  description: 'Click an element in your running Angular app and hand it to a coding agent — element picker + OpenCode bridge.',
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
  source: {
    github: 'aminarshadinia/clicktocode',
    npm: '@clicktocode/angular',
  },
  links: {
    github: 'https://github.com/aminarshadinia/clicktocode',
    npm: 'https://www.npmjs.com/package/@clicktocode/angular',
    website: 'https://github.com/aminarshadinia/clicktocode/tree/main/packages/angular#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 62,
      weekly: 4,
    },
  },
})
