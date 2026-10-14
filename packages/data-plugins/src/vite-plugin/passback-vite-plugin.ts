import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@passback/vite-plugin',
  description: 'Vite plugin that serves the Passback widget in dev and staging builds and writes marks to the local inbox.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'passback',
    'vite',
    'vite-plugin',
    'coding-agent',
    'ai-agent',
    'mcp',
    'feedback',
    'annotation',
  ],
  links: {
    github: 'https://github.com/horsepower-inc/passback-widget',
    npm: 'https://www.npmjs.com/package/@passback/vite-plugin',
    website: 'https://passback.dev',
  },
  source: {
    github: 'horsepower-inc/passback-widget',
    npm: '@passback/vite-plugin',
  },
})
