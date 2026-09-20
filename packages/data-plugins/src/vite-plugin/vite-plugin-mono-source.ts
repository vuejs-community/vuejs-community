import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mono-source',
  description: 'Using package\'s source code in monorepo with Vite, Seamless.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'monorepo',
  ],
  links: {
    github: 'https://github.com/fi3ework/vite-plugin-mono-source',
    npm: 'https://www.npmjs.com/package/vite-plugin-mono-source',
    website: 'https://github.com/fi3ework/vite-plugin-mono-source#readme',
  },
  source: {
    github: 'fi3ework/vite-plugin-mono-source',
    npm: 'vite-plugin-mono-source',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
