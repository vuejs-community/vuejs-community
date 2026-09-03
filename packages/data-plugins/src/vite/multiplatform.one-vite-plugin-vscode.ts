import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@multiplatform.one/vite-plugin-vscode',
  description: 'Vite config factory for building a VS Code extension (extension host + Tamagui webview) as a target of a multiplatform.one One app — wraps @tomjs/vite-plugin-vscode with the workspace source aliases, the one-router seam alias, React dedupe against one\'s v',
  version: '7.6.0',
  category: 'plugin',
  tags: [
    'multiplatform.one',
    'vite-plugin',
    'vscode',
    'vscode-extension',
    'webview',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@multiplatform.one/vite-plugin-vscode',
  },
  stats: {
    downloads: {
      monthly: 2353,
      weekly: 848,
    },
  },
})
