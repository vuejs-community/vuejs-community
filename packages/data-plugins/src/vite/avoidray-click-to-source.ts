import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@avoidray/click-to-source',
  description: 'Alt+click any element to open its source in VS Code',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'devtools',
    'vscode',
    'source',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/avoidray/click-to-source',
    npm: 'https://www.npmjs.com/package/@avoidray/click-to-source',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
