import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'code-inspector-plugin-electron',
  description: 'Vite plugin + Vue composable + Electron IPC handler for code inspection in Electron apps. Shift+Option hover to inspect, click to open source at exact line.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vue',
    'electron',
    'code-inspector',
    'inspector',
    'developer-tools',
    'vite',
    'vue-inspector',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/code-inspector-plugin-electron',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 2,
    },
  },
})
