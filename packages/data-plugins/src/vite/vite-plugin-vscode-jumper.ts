import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vscode-jumper',
  description: 'A Vite plugin to enable element picker and jump to Vue SFC source files in VSCode via shortcut',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'vscode',
    'jump',
    'element-picker',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-vscode-jumper',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
