import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@improvements/vite-plugin-devtools-json',
  description: 'Vite plugin for generating `com.chrome.devtools.json` on the fly in the devserver.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chrome-devtools',
    'devtools',
    'chrome',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ChromeDevTools/vite-plugin-devtools-json',
    npm: 'https://www.npmjs.com/package/@improvements/vite-plugin-devtools-json',
  },
  stats: {
    downloads: {
      monthly: 98,
      weekly: 29,
    },
  },
})
