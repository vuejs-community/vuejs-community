import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-source-locator',
  description: 'Dev-only Vite plugin: click UI elements to jump to source in your IDE',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'source-locator',
    'devtools',
    'cursor',
    'vscode',
  ],
  source: {
    github: 'amir1824/UI-Locator',
    npm: 'vite-plugin-source-locator',
  },
  links: {
    github: 'https://github.com/amir1824/UI-Locator',
    npm: 'https://www.npmjs.com/package/vite-plugin-source-locator',
    website: 'https://github.com/amir1824/UI-Locator#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 100,
      weekly: 7,
    },
  },
})
