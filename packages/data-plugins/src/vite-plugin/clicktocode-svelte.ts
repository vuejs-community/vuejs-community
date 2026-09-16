import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@clicktocode/svelte',
  description: 'Click an element in your running Svelte app and hand it to a coding agent — element picker + OpenCode bridge.',
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
    npm: '@clicktocode/svelte',
  },
  links: {
    github: 'https://github.com/aminarshadinia/clicktocode',
    npm: 'https://www.npmjs.com/package/@clicktocode/svelte',
    website: 'https://github.com/aminarshadinia/clicktocode/tree/main/packages/svelte#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 57,
      weekly: 6,
    },
  },
})
