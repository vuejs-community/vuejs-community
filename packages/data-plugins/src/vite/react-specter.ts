import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-specter',
  description: 'Select-to-edit for React apps: click an element in your running dev app, describe the change in plain language, and your AI coding agent edits the real source file.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'react',
    'devtools',
    'inspector',
    'click-to-edit',
    'select-to-edit',
    'mcp',
    'claude-code',
    'ai',
    'vite-plugin',
    'nextjs',
    'webpack-loader',
    'babel-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Starkyv/react-specter',
    npm: 'https://www.npmjs.com/package/react-specter',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 6,
    },
  },
})
