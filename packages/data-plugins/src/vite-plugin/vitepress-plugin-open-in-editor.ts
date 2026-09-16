import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-open-in-editor',
  description: 'Hover any paragraph, code block, table or list in a VitePress site and jump straight to the exact source line in your local editor. Works with VS Code Remote SSH and 20+ editors.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'vite-plugin',
    'vscode',
    'open-in-editor',
    'click-to-source',
    'markdown-it',
    'remote-ssh',
  ],
  source: {
    github: 'b1tzer/vitepress-plugin-open-in-editor',
    npm: 'vitepress-plugin-open-in-editor',
  },
  links: {
    github: 'https://github.com/b1tzer/vitepress-plugin-open-in-editor',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-open-in-editor',
    website: 'https://github.com/b1tzer/vitepress-plugin-open-in-editor#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1004,
      weekly: 24,
    },
  },
})
