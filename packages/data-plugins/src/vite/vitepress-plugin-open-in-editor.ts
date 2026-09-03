import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-open-in-editor',
  description: 'Hover any paragraph, code block, table or list in a VitePress site and jump straight to the exact source line in your local editor. Works with VS Code Remote SSH and 20+ editors.',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'vitepress',
    'vite-plugin',
    'vscode',
    'open-in-editor',
    'click-to-source',
    'markdown-it',
    'remote-ssh',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/b1tzer/vitepress-plugin-open-in-editor',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-open-in-editor',
  },
  stats: {
    downloads: {
      monthly: 973,
      weekly: 39,
    },
  },
})
