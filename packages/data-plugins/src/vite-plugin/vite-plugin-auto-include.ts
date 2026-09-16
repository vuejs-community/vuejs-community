import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-include',
  description: 'A tool that can auto add babel-plugin-import\'s result to vite\'s Pre-bundling dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'auto-include',
    'vite-plugin',
    'vite',
    'babel-plugin-import',
  ],
  source: {
    github: 'cx690/vite-plugin-auto-include',
    npm: 'vite-plugin-auto-include',
  },
  links: {
    github: 'https://github.com/cx690/vite-plugin-auto-include',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-include',
    website: 'https://github.com/cx690/vite-plugin-auto-include#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 0,
    },
  },
})
