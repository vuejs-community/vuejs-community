import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'code-inspector-plugin-electron',
  description: 'Vite plugin + Vue composable + Electron IPC handler for code inspection in Electron apps. Shift+Option hover to inspect, click to open source at exact line.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/code-inspector-plugin-electron',
  },
  source: {
    npm: 'code-inspector-plugin-electron',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 3,
    },
  },
})
