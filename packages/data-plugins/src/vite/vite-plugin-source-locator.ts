import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-source-locator',
  description: 'Dev-only Vite plugin: click UI elements to jump to source in your IDE',
  version: '1.4.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'source-locator',
    'devtools',
    'cursor',
    'vscode',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/amir1824/UI-Locator',
    npm: 'https://www.npmjs.com/package/vite-plugin-source-locator',
  },
  stats: {
    downloads: {
      monthly: 89,
      weekly: 16,
    },
  },
})
