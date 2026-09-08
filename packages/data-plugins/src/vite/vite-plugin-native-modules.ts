import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-native-modules',
  description: 'A Vite plugin for integrating Node.js native modules into your Vite project',
  icon: 'logos:vite-icon',
  version: '2.4.2',
  category: 'plugin',
  tags: [
    'electron',
    'electron-vite',
    'modules',
    'native',
    'native-addon',
    'native-module',
    'native-module-loader',
    'node-gyp',
    'plugin',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'biw/vite-plugin-native-modules',
    npm: 'vite-plugin-native-modules',
  },
  links: {
    github: 'https://github.com/biw/vite-plugin-native-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-native-modules',
  },
  stats: {
    downloads: {
      monthly: 3114,
      weekly: 361,
    },
  },
})
