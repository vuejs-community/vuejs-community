import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@avoidray/click-to-source',
  description: 'Alt+click any element to open its source in VS Code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'devtools',
    'vscode',
    'source',
  ],
  source: {
    github: 'avoidray/click-to-source',
    npm: '@avoidray/click-to-source',
  },
  links: {
    github: 'https://github.com/avoidray/click-to-source',
    npm: 'https://www.npmjs.com/package/@avoidray/click-to-source',
    website: 'https://github.com/avoidray/click-to-source#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 7,
    },
  },
})
