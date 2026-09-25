import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lumis-sh/vite',
  description: 'Vite plugin for highlighting static HTML with Lumis',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lumis-sh',
    'syntax-highlighting',
    'tree-sitter',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leandrocp/lumis',
    npm: 'https://www.npmjs.com/package/@lumis-sh/vite',
    website: 'https://lumis.sh',
  },
  source: {
    github: 'leandrocp/lumis',
    npm: '@lumis-sh/vite',
  },
})
