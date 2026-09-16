import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vscode-jumper',
  description: 'A Vite plugin to enable element picker and jump to Vue SFC source files in VSCode via shortcut',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'vscode',
    'jump',
    'element-picker',
  ],
  source: {
    npm: 'vite-plugin-vscode-jumper',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-vscode-jumper',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
