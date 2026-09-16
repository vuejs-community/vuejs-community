import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@improvements/vite-plugin-devtools-json',
  description: 'Vite plugin for generating `com.chrome.devtools.json` on the fly in the devserver.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chrome-devtools',
    'devtools',
    'chrome',
  ],
  source: {
    github: 'ChromeDevTools/vite-plugin-devtools-json',
    npm: '@improvements/vite-plugin-devtools-json',
  },
  links: {
    github: 'https://github.com/ChromeDevTools/vite-plugin-devtools-json',
    npm: 'https://www.npmjs.com/package/@improvements/vite-plugin-devtools-json',
    website: 'https://github.com/ChromeDevTools/vite-plugin-devtools-json#readme',
  },
  stats: {
    stars: 405,
    downloads: {
      monthly: 92,
      weekly: 14,
    },
  },
})
