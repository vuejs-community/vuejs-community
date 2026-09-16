import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@multiplatform.one/vite-plugin-vscode',
  description: 'Vite config factory for building a VS Code extension (extension host + Tamagui webview) as a target of a multiplatform.one One app — wraps @tomjs/vite-plugin-vscode with the workspace source aliases, the one-router seam alias, React dedupe against one\'s v',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'multiplatform.one',
    'vite-plugin',
    'vscode',
    'vscode-extension',
    'webview',
  ],
  source: {
    npm: '@multiplatform.one/vite-plugin-vscode',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@multiplatform.one/vite-plugin-vscode',
    website: 'https://multiplatform.one',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3347,
      weekly: 873,
    },
  },
})
