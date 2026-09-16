import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-combine',
  description: 'Combines multiple module files into a single target file. It supports four modes: named exports, default exports, automatic exports, and no exports, and can auto-generate corresponding import statements based on configuration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-combine',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-combine',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-combine',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-combine/quick-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 430,
      weekly: 24,
    },
  },
})
