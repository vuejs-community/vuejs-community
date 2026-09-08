import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mono-source',
  description: 'Using package\'s source code in monorepo with Vite, Seamless.',
  icon: 'logos:vite-icon',
  version: '0.0.0-beta-20230905193120',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'monorepo',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'fi3ework/vite-plugin-mono-source',
    npm: 'vite-plugin-mono-source',
  },
  links: {
    github: 'https://github.com/fi3ework/vite-plugin-mono-source',
    npm: 'https://www.npmjs.com/package/vite-plugin-mono-source',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 0,
    },
  },
})
